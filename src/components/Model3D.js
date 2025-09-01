
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader, GLTFLoader } from 'three-stdlib';

const Model3D = ({ modelPath, containerStyle = {}, showBorder = true, enableRotation = true }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 10);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Enhanced Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Main directional light from top
    const mainDirectionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainDirectionalLight.position.set(0, 15, 0);
    mainDirectionalLight.castShadow = true;
    mainDirectionalLight.shadow.mapSize.width = 2048;
    mainDirectionalLight.shadow.mapSize.height = 2048;
    scene.add(mainDirectionalLight);

    // Top 4 Side Lights - positioned around the model from above
    // Front Top Light
    const frontTopLight = new THREE.DirectionalLight(0x00d4aa, 0.8);
    frontTopLight.position.set(0, 12, 8);
    frontTopLight.target.position.set(0, 0, 0);
    frontTopLight.castShadow = true;
    scene.add(frontTopLight);
    scene.add(frontTopLight.target);

    // Back Top Light
    const backTopLight = new THREE.DirectionalLight(0x6750a2, 0.8);
    backTopLight.position.set(0, 12, -8);
    backTopLight.target.position.set(0, 0, 0);
    backTopLight.castShadow = true;
    scene.add(backTopLight);
    scene.add(backTopLight.target);

    // Left Top Light
    const leftTopLight = new THREE.DirectionalLight(0x03B3C3, 0.7);
    leftTopLight.position.set(-8, 12, 0);
    leftTopLight.target.position.set(0, 0, 0);
    leftTopLight.castShadow = true;
    scene.add(leftTopLight);
    scene.add(leftTopLight.target);

    // Right Top Light
    const rightTopLight = new THREE.DirectionalLight(0xC247AC, 0.7);
    rightTopLight.position.set(8, 12, 0);
    rightTopLight.target.position.set(0, 0, 0);
    rightTopLight.castShadow = true;
    scene.add(rightTopLight);
    scene.add(rightTopLight.target);

    // Additional accent point lights
    const pointLight1 = new THREE.PointLight(0x00d4aa, 0.6, 50);
    pointLight1.position.set(-10, 8, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6750a2, 0.6, 50);
    pointLight2.position.set(10, 8, -10);
    scene.add(pointLight2);

    // Determine loader based on file extension
    const isGLB = modelPath.toLowerCase().endsWith('.glb') || modelPath.toLowerCase().endsWith('.gltf');
    const loader = isGLB ? new GLTFLoader() : new FBXLoader();
    
    loader.load(
      modelPath,
      (result) => {
        const object = isGLB ? result.scene : result;
        
        // Scale and position the model
        object.scale.setScalar(isGLB ? 1 : 0.01); // GLB models usually don't need scaling
        object.position.set(0, 0, 0);
        
        // Enable shadows and fix materials
        object.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Enhance materials with better lighting
            if (child.material) {
              // Handle both single material and array of materials
              const materials = Array.isArray(child.material) ? child.material : [child.material];
              
              materials.forEach((material) => {
                material.side = THREE.DoubleSide;
                
                // For FBX files, often materials need to be recreated
                if (!isGLB && material.map === null) {
                  // Create a basic material with color if no texture
                  const newMaterial = new THREE.MeshStandardMaterial({
                    color: material.color || 0x888888,
                    roughness: 0.7,
                    metalness: 0.1,
                    side: THREE.DoubleSide
                  });
                  
                  if (Array.isArray(child.material)) {
                    const index = child.material.indexOf(material);
                    child.material[index] = newMaterial;
                  } else {
                    child.material = newMaterial;
                  }
                }
                
                if (material.map) {
                  material.map.colorSpace = THREE.SRGBColorSpace;
                  material.map.flipY = false; // Common fix for FBX textures
                }
              });
            }
          }
        });

        scene.add(object);

        // Animation loop
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);
          
          // Rotate the model only if enabled
          if (enableRotation) {
            object.rotation.y += 0.005;
          }
          
          // Animate lights
          const time = Date.now() * 0.001;
          pointLight1.position.x = Math.cos(time) * 15;
          pointLight1.position.z = Math.sin(time) * 15;
          pointLight2.position.x = Math.cos(time + Math.PI) * 10;
          pointLight2.position.z = Math.sin(time + Math.PI) * 10;

          renderer.render(scene, camera);
        };
        animate();
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading 3D model:', error);
        console.error('Model path:', modelPath);
        console.error('File type detected:', isGLB ? 'GLB/GLTF' : 'FBX');
        
        // Show a fallback message in the container
        if (mountRef.current) {
          const errorDiv = document.createElement('div');
          errorDiv.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: rgba(255, 255, 255, 0.7);
            text-align: center;
            font-family: Arial, sans-serif;
          `;
          errorDiv.innerHTML = `
            <div>
              <div style="font-size: 48px; margin-bottom: 16px;">🎭</div>
              <div>3D Model Loading...</div>
              <div style="font-size: 12px; margin-top: 8px; opacity: 0.5;">Please wait while we load the interactive experience</div>
            </div>
          `;
          mountRef.current.appendChild(errorDiv);
        }
      }
    );

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [modelPath, enableRotation]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '400px',
        borderRadius: showBorder ? '20px' : '0px',
        overflow: 'hidden',
        background: showBorder ? 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(103, 80, 162, 0.1))' : 'transparent',
        border: showBorder ? '1px solid rgba(0, 212, 170, 0.2)' : 'none',
        ...containerStyle
      }}
    />
  );
};

export default Model3D;
