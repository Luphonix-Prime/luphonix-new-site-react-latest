
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(mobileRegex.test(userAgent) || (isTouchDevice && isSmallScreen));
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const MAX_STEPS = 128;
const PRECISION = 0.0005;

const createInitialState = (amount) => ({
  positions: Array.from({ length: amount }, () => new THREE.Vector3(0, 0, 0)),
  rotations: Array.from({ length: amount }, () => new THREE.Vector3(0, 0, 0)),
  baseOffsets: Array.from({ length: amount }, (_, i) => {
    const t = (i / amount) * Math.PI * 2;
    return {
      x: Math.cos(t) * 1.75,
      y: Math.sin(t) * 4.5,
      posSpeed: new THREE.Vector3(
        1.0 + Math.random() * 4,
        1.0 + Math.random() * 3.5,
        0.5 + Math.random() * 2.0
      ),
      rotSpeed: new THREE.Vector3(
        0.1 + Math.random() * 1,
        0.1 + Math.random() * 1,
        0.1 + Math.random() * 1
      ),
      posPhase: new THREE.Vector3(
        t + Math.random() * Math.PI * 3.0,
        t * 1.3 + Math.random() * Math.PI * 3.0,
        t * 0.7 + Math.random() * Math.PI * 3.0
      ),
      rotPhase: new THREE.Vector3(
        t * 0.5 + Math.random() * Math.PI * 2.0,
        t * 0.8 + Math.random() * Math.PI * 2.0,
        t * 1.1 + Math.random() * Math.PI * 2.0
      )
    };
  })
});

const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const createFragmentShader = (amount) => `
uniform float u_time;
uniform float u_aspect;
uniform vec3 u_positions[${amount}];
uniform vec3 u_rotations[${amount}];
uniform sampler2D u_logoTexture;
varying vec2 v_uv;

const int MaxCount = ${amount};
const float PI = 3.14159265358979;

// SDF functions
float sdBox(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}

float opSmoothUnion(float d1, float d2, float k) {
  float h = clamp(0.5 + 0.5*(d2-d1)/k, 0.0, 1.0);
  return mix(d2, d1, h) - k*h*(1.0-h);
}

mat4 rotationMatrix(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;
  
  return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
              oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
              oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
              0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float sdf(vec3 p) {
  vec3 correct = 0.1 * vec3(u_aspect, 1.0, 1.0);

  vec3 tp = p + -u_positions[0] * correct;
  vec3 rp = tp;
  rp = rotate(rp, vec3(1.0, 1.0, 0.0), u_rotations[0].x + u_rotations[0].y);
  float final = sdBox(rp, vec3(0.15)) - 0.03;
  
  for(int i = 1; i < MaxCount; i++) {
    tp = p + -u_positions[i] * correct;
    rp = tp;
    rp = rotate(rp, vec3(1.0, 1.0, 0.0), u_rotations[i].x + u_rotations[i].y);
    float box = sdBox(rp, vec3(0.15)) - 0.03;
    final = opSmoothUnion(final, box, 0.4);
  }

  return final;
}

vec3 calcNormal(in vec3 p) {
  const float h = 0.001;
  return normalize(vec3(
    sdf(p + vec3(h, 0, 0)) - sdf(p - vec3(h, 0, 0)),
    sdf(p + vec3(0, h, 0)) - sdf(p - vec3(0, h, 0)),
    sdf(p + vec3(0, 0, h)) - sdf(p - vec3(0, 0, h))
  ));
}

vec3 getHolographicMaterial(vec3 normal, vec3 viewDir, float time, vec2 uv) {
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
  
  // Sample logo texture
  vec4 logoSample = texture2D(u_logoTexture, uv * 0.5 + 0.5);
  
  float hue = dot(normal, viewDir) * 3.14159 + time * 0.5;
  
  // Green iridescence with logo influence
  vec3 greenShades = vec3(
    logoSample.r * 0.2,
    sin(hue) * 0.3 + 0.7 + logoSample.g * 0.3,
    sin(hue + 1.0) * 0.2 + 0.3 + logoSample.b * 0.1
  );
  
  return greenShades * fresnel * 1.2 * (0.5 + logoSample.a * 0.5);
}

void main() {
  vec2 centeredUV = (v_uv - 0.5) * vec2(u_aspect, 1.0);
  vec3 ray = normalize(vec3(centeredUV, -1.0));
  
  vec3 camPos = vec3(0.0, 0.0, 2.3);
  vec3 rayPos = camPos;
  float totalDist = 0.0;
  float tMax = 5.0;

  for(int i = 0; i < ${MAX_STEPS}; i++) {
    float dist = sdf(rayPos);
    if (dist < ${PRECISION} || tMax < totalDist) break;
    totalDist += dist;
    rayPos = camPos + totalDist * ray;
  }

  vec3 color = vec3(0.0);
  float alpha = 0.0;

  if(totalDist < tMax) {
    vec3 normal = calcNormal(rayPos);
    vec3 viewDir = normalize(camPos - rayPos);
    
    vec3 lightDir = normalize(vec3(-0.5, 0.8, 0.6));
    float diff = max(dot(normal, lightDir), 0.0);
    
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 32.0);
    
    vec3 iridescent = getHolographicMaterial(normal, viewDir, u_time, centeredUV);
    
    float rimLight = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    vec3 rimColor = vec3(0.0, 0.8, 0.4) * rimLight * 0.5;
    
    float ao = 1.0 - smoothstep(0.0, 0.3, totalDist / tMax);
    
    vec3 baseColor = vec3(0.05, 0.1, 0.08);
    color = baseColor * (0.1 + diff * 0.4) * ao;
    color += iridescent * (0.8 + diff * 0.2);
    color += vec3(0.8, 1.0, 0.9) * spec * 0.6;
    color += rimColor;
    
    float fog = 1.0 - exp(-totalDist * 0.2);
    color = mix(color, vec3(0.0), fog);
    alpha = 1.0;
  }

  gl_FragColor = vec4(color, alpha);
}`;

const ScreenPlane = ({ animationState, amount, logoTexture }) => {
  const { viewport } = useThree();
  const materialRef = useRef();

  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_aspect: { value: viewport.width / viewport.height },
    u_positions: { value: animationState.positions },
    u_rotations: { value: animationState.rotations },
    u_logoTexture: { value: logoTexture }
  }), [viewport.width, viewport.height, animationState.positions, animationState.rotations, logoTexture]);

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value += delta;
      const time = materialRef.current.uniforms.u_time.value;
      
      animationState.baseOffsets.forEach((offset, i) => {
        const wanderX = Math.sin(time * offset.posSpeed.x + offset.posPhase.x) * 0.8;
        const wanderY = Math.cos(time * offset.posSpeed.y + offset.posPhase.y) * 5;
        const wanderZ = Math.sin(time * offset.posSpeed.z + offset.posPhase.z) * 0.5;
        
        const secondaryX = Math.cos(time * offset.posSpeed.x * 0.7 + offset.posPhase.x * 1.3) * 0.4;
        const secondaryY = Math.sin(time * offset.posSpeed.y * 0.8 + offset.posPhase.y * 1.1) * 0.3;
        
        animationState.positions[i].set(
          offset.x + wanderX + secondaryX,
          offset.y + wanderY + secondaryY,
          wanderZ
        );
        
        animationState.rotations[i].set(
          time * offset.rotSpeed.x + offset.rotPhase.x,
          time * offset.rotSpeed.y + offset.rotPhase.y,
          time * offset.rotSpeed.z + offset.rotPhase.z
        );
        
        materialRef.current.uniforms.u_positions.value[i].copy(animationState.positions[i]);
        materialRef.current.uniforms.u_rotations.value[i].copy(animationState.rotations[i]);
      });
    }
  });

  return (
    <Plane args={[1, 1]} scale={[viewport.width, viewport.height, 1]}>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={createFragmentShader(amount)}
        transparent={true}
      />
    </Plane>
  );
};

const AnimationController = ({ animationState }) => {
  useEffect(() => {
    animationState.baseOffsets.forEach((offset, i) => {
      animationState.positions[i].set(offset.x, offset.y, 0);
      animationState.rotations[i].set(0, 0, 0);
    });
  }, [animationState.baseOffsets, animationState.positions, animationState.rotations]);

  return null;
};

export const NeonLogo3D = () => {
  const isMobile = useIsMobile();
  const amount = isMobile ? 3 : 4;
  const [animationState] = useState(() => createInitialState(amount));
  
  // Create a canvas texture with your logo
  const logoTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 512;
    
    // Create gradient background
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, 'rgba(0, 212, 170, 0.8)');
    gradient.addColorStop(0.5, 'rgba(0, 212, 170, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 212, 170, 0.1)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Draw stylized "L" logo
    ctx.fillStyle = '#00D4AA';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    
    // Main L shape
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(180, 100);
    ctx.lineTo(180, 350);
    ctx.lineTo(300, 350);
    ctx.lineTo(300, 380);
    ctx.lineTo(150, 380);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Add infinity symbol
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#ffffff';
    const centerX = 350, centerY = 200;
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * Math.PI * 2;
      const x = centerX + 40 * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t));
      const y = centerY + 40 * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t));
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
  
  const cameraConfig = useMemo(() => ({
    position: [0, 0, 15],
    fov: 50,
    near: 0.1,
    far: 2000,
  }), []);

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-950 to-green-900">
      <Canvas
        camera={cameraConfig}
        dpr={1}
        frameloop="always"
        gl={{ 
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance"
        }}
      >
        <AnimationController animationState={animationState} />
        <ScreenPlane animationState={animationState} amount={amount} logoTexture={logoTexture} />
      </Canvas>
    </div>
  );
};
