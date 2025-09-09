import React, { useRef, useEffect, useState, Suspense } from 'react';
import * as THREE from 'three';
import { FBXLoader, GLTFLoader } from 'three-stdlib';
import WebGLErrorBoundary from './WebGLErrorBoundary';

const Model3D = ({ modelPath, containerStyle = {}, showBorder = false, enableRotation = false }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const [loadingProgress, setLoadingProgress] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    sceneRef.current = scene;

    // Camera setup - adjusted for better viewing
    const camera = new THREE.PerspectiveCamera(
      45, // Reduced FOV for better framing
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    // Neutral Lighting Setup (removing green tints)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Main directional light - neutral white
    const mainDirectionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    mainDirectionalLight.position.set(0, 15, 0);
    mainDirectionalLight.castShadow = true;
    mainDirectionalLight.shadow.mapSize.width = 2048;
    mainDirectionalLight.shadow.mapSize.height = 2048;
    scene.add(mainDirectionalLight);

    // Side lights with neutral colors
    const frontLight = new THREE.DirectionalLight(0xffffff, 0.5);
    frontLight.position.set(0, 8, 15);
    scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(0, 8, -15);
    scene.add(backLight);

    const leftLight = new THREE.DirectionalLight(0xffffff, 0.4);
    leftLight.position.set(-15, 8, 0);
    scene.add(leftLight);

    const rightLight = new THREE.DirectionalLight(0xffffff, 0.4);
    rightLight.position.set(15, 8, 0);
    scene.add(rightLight);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    // Handle WebGL context loss
    const handleContextLost = (event) => {
      event.preventDefault();
      console.log('WebGL context lost. Attempting to restore...');
      // Optionally, you could show a message to the user here
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored.');
      // Reinitialize renderer and scene if necessary.
      // For simplicity, we'll rely on the component re-rendering or manual reset.
    };

    if (renderer.domElement) {
      renderer.domElement.addEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored);
    }


    // Mouse event handlers for rotation
    const handleMouseDown = (event) => {
      mouseRef.current.isDown = true;
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
      currentMount.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
      currentMount.style.cursor = 'grab';
    };

    const handleMouseMove = (event) => {
      if (!mouseRef.current.isDown || !modelRef.current) return;

      const deltaX = event.clientX - mouseRef.current.x;

      // Only allow horizontal rotation (Y-axis)
      modelRef.current.rotation.y += deltaX * 0.01;

      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    // Add mouse event listeners
    currentMount.addEventListener('mousedown', handleMouseDown);
    currentMount.addEventListener('mouseup', handleMouseUp);
    currentMount.addEventListener('mousemove', handleMouseMove);
    currentMount.addEventListener('mouseleave', handleMouseUp);
    currentMount.style.cursor = 'grab';

    // Determine loader based on file extension
    const isGLB = modelPath.toLowerCase().endsWith('.glb') || modelPath.toLowerCase().endsWith('.gltf');
    const loader = isGLB ? new GLTFLoader() : new FBXLoader();

    loader.load(
      modelPath,
      (result) => {
        const object = isGLB ? result.scene : result;
        modelRef.current = object;

        // Calculate bounding box for proper scaling and positioning
        const boundingBox = new THREE.Box3().setFromObject(object);
        const size = boundingBox.getSize(new THREE.Vector3());
        const center = boundingBox.getCenter(new THREE.Vector3());

        // Calculate scale to fit the model nicely in view
        const maxDimension = Math.max(size.x, size.y, size.z);
        let targetSize = 8; // Target size in scene units

        // Adjust target size based on file type
        if (isGLB) {
          targetSize = maxDimension > 10 ? 6 : 8;
        } else {
          targetSize = maxDimension > 100 ? 8 : 6;
        }

        const scale = targetSize / maxDimension;
        object.scale.setScalar(scale);

        // Center the model
        object.position.copy(center.multiplyScalar(-scale));

        // Position camera based on model size
        const distance = maxDimension * scale * 1.5;
        camera.position.set(distance * 0.8, distance * 0.6, distance * 1.2);
        camera.lookAt(0, 0, 0);

        // Setup animations for GLB files
        if (isGLB && result.animations && result.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(object);

          // Play all available animations
          result.animations.forEach((clip) => {
            const action = mixerRef.current.clipAction(clip);
            action.play();
          });
        }

        // Enable shadows and fix materials
        object.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child.material) {
              const materials = Array.isArray(child.material) ? child.material : [child.material];

              materials.forEach((material) => {
                material.side = THREE.DoubleSide;

                if (!isGLB && material.map === null) {
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
                  material.map.flipY = false;
                }
              });
            }
          }
        });

        scene.add(object);

        // Animation loop
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);

          const deltaTime = clockRef.current.getDelta();

          // Update animation mixer for GLB animations
          if (mixerRef.current) {
            mixerRef.current.update(deltaTime);
          }

          // Remove auto-rotation - only rotate if enableRotation is true
          if (enableRotation && modelRef.current) {
            modelRef.current.rotation.y += 0.005;
          }

          renderer.render(scene, camera);
        };
        animate();
      },
      (progress) => {
        if (progress.total > 0) {
          const percentage = Math.min((progress.loaded / progress.total) * 100, 100);
          setLoadingProgress(percentage);
        }
      },
      (error) => {
        console.error('Error loading 3D model:', error);
        console.error('Model path:', modelPath);
        console.error('File type detected:', isGLB ? 'GLB/GLTF' : 'FBX');

        if (currentMount) {
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
          currentMount.appendChild(errorDiv);
        }
      }
    );

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;

      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

      if (currentMount) {
        currentMount.removeEventListener('mousedown', handleMouseDown);
        currentMount.removeEventListener('mouseup', handleMouseUp);
        currentMount.removeEventListener('mousemove', handleMouseMove);
        currentMount.removeEventListener('mouseleave', handleMouseUp);
      }

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
        if (renderer.domElement) {
          renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
          renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
        }
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
    <WebGLErrorBoundary>
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '400px',
          borderRadius: '0px',
          overflow: 'hidden',
          background: 'transparent',
          border: showBorder ? '1px solid #ccc' : 'none',
          ...containerStyle
        }}
      />
    </WebGLErrorBoundary>
  );
};

export default Model3D;