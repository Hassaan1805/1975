import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CelestialSphereProps {
  className?: string;
}

export const CelestialSphere: React.FC<CelestialSphereProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for mouse interaction and floating
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // 1. Core Glass Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.4, 64, 64);
    
    // Custom physical glass material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0A1538'),
      emissive: new THREE.Color('#030A1F'),
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.65, // translucent glass
      ior: 1.52,
      thickness: 1.8,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#65A9FF'),
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.95,
    });

    const glassSphere = new THREE.Mesh(sphereGeometry, glassMaterial);
    sphereGroup.add(glassSphere);

    // 2. Inner Luminous Ribbon / Crescent Core
    const innerRibbonGeometry = new THREE.TorusGeometry(1.05, 0.05, 32, 100, Math.PI * 1.6);
    const innerRibbonMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#65A9FF'),
      emissive: new THREE.Color('#65A9FF'),
      emissiveIntensity: 2.2,
      roughness: 0.2,
    });
    const innerRibbon = new THREE.Mesh(innerRibbonGeometry, innerRibbonMaterial);
    innerRibbon.rotation.x = Math.PI / 4;
    innerRibbon.rotation.y = Math.PI / 6;
    sphereGroup.add(innerRibbon);

    // Second intersecting subtle ribbon
    const secondRibbonGeometry = new THREE.TorusGeometry(0.85, 0.025, 32, 100);
    const secondRibbonMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#B7D5FF'),
      emissive: new THREE.Color('#B7D5FF'),
      emissiveIntensity: 1.4,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
    });
    const secondRibbon = new THREE.Mesh(secondRibbonGeometry, secondRibbonMaterial);
    secondRibbon.rotation.x = -Math.PI / 3;
    secondRibbon.rotation.z = Math.PI / 5;
    sphereGroup.add(secondRibbon);

    // 3. Delicate Outer Orbital Ring
    const orbitGeometry = new THREE.RingGeometry(1.9, 1.93, 128);
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#65A9FF'),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.28,
    });
    const orbitRing = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbitRing.rotation.x = Math.PI / 2.3;
    orbitRing.rotation.y = -Math.PI / 8;
    sphereGroup.add(orbitRing);

    // 4. Floating Stardust inside & around sphere
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color('#65A9FF');
    const c2 = new THREE.Color('#B7D5FF');
    const c3 = new THREE.Color('#FFFFFF');

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.0 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = Math.random() > 0.5 ? c1 : Math.random() > 0.5 ? c2 : c3;
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    sphereGroup.add(particles);

    // 5. Lighting Setup (Dramatic Midnight Electric Lighting)
    // Rim light 1 (Electric Blue)
    const rimLightBlue = new THREE.PointLight(new THREE.Color('#65A9FF'), 8, 12);
    rimLightBlue.position.set(-2.5, 1.2, 1.8);
    scene.add(rimLightBlue);

    // Rim light 2 (Icy Blue opposite corner)
    const rimLightIcy = new THREE.PointLight(new THREE.Color('#B7D5FF'), 4, 10);
    rimLightIcy.position.set(2.2, -1.8, 1.2);
    scene.add(rimLightIcy);

    // Back glow light (Creates the translucent glow through the glass)
    const backLight = new THREE.PointLight(new THREE.Color('#2A55B2'), 6, 8);
    backLight.position.set(0, 0, -2.5);
    scene.add(backLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(new THREE.Color('#0D1733'), 1.8);
    scene.add(ambientLight);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 400;
      height = container.clientHeight || 400;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (damping)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group rotation and floating motion
      sphereGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      sphereGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 + mouseY;
      sphereGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.08;

      // Inner ribbons counter-rotate slowly
      innerRibbon.rotation.z = elapsedTime * 0.15;
      secondRibbon.rotation.y = -elapsedTime * 0.2;
      orbitRing.rotation.z = elapsedTime * 0.05;
      particles.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      sphereGeometry.dispose();
      glassMaterial.dispose();
      innerRibbonGeometry.dispose();
      innerRibbonMaterial.dispose();
      secondRibbonGeometry.dispose();
      secondRibbonMaterial.dispose();
      orbitGeometry.dispose();
      orbitMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-label="3D Interactive Midnight Glass Sphere"
    >
      {/* Soft blue back-glow reflection behind sphere */}
      <div 
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#65A9FF]/15 blur-3xl pointer-events-none -z-10 animate-pulse-glow"
        aria-hidden="true" 
      />
    </div>
  );
};
