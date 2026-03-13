/**
 * OpenCart-themed Three.js particle animation
 * Colors: #04B6F0 (OpenCart Blue), #404040 (Gray)
 * Only runs on pages with #hero element
 */

(function() {
  'use strict';

  // Check if we're on a page with the hero element
  function shouldRunAnimation() {
    return document.getElementById('hero') !== null;
  }

  // Wait for DOM to be ready
  function init() {
    // Only run on pages with hero element
    if (!shouldRunAnimation()) {
      return;
    }

    const canvas = document.querySelector('#attractor canvas');
    if (!canvas) {
      console.warn('Canvas not found, retrying...');
      setTimeout(init, 500);
      return;
    }

    // Load Three.js from CDN (UMD version for global access)
    if (!window.THREE) {
      const script = document.createElement('script');
      // Use cdnjs for reliable CDN delivery
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => {
        window.THREE = window.THREE || THREE;
        startAnimation(canvas);
      };
      script.onerror = () => {
        console.error('Failed to load Three.js');
      };
      document.head.appendChild(script);
    } else {
      startAnimation(canvas);
    }
  }

  function startAnimation(canvas) {
    const THREE = window.THREE;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });

    renderer.setSize(canvas.width, canvas.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // OpenCart Blue particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // OpenCart blue material with glow effect
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x04B6F0,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add connecting lines (network effect)
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x04B6F0,
      transparent: true,
      opacity: 0.15
    });
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    });

    // Handle touch events for mobile
    document.addEventListener('touchmove', (event) => {
      if (event.touches.length > 0) {
        mouseX = event.touches[0].clientX / window.innerWidth - 0.5;
        mouseY = event.touches[0].clientY / window.innerHeight - 0.5;
      }
    });

    function animate() {
      requestAnimationFrame(animate);

      // Rotate based on mouse position
      particlesMesh.rotation.y += 0.001 + mouseX * 0.002;
      particlesMesh.rotation.x += 0.0005 + mouseY * 0.002;

      linesMesh.rotation.y = particlesMesh.rotation.y;
      linesMesh.rotation.x = particlesMesh.rotation.x;

      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    function onResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', onResize);

    // Initial resize to match canvas
    onResize();

    console.log('OpenCart Three.js animation initialized');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
