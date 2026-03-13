/**
 * Three.js Particle Animation for Homepage
 * Attractor effect with mouse interaction
 * Zensical.org style: bright particles on dark background
 */

(function() {
    'use strict';

    // Configuration - bright particles for dark background
    const CONFIG = {
        particleCount: 2500,
        particleColor: 0xffffff,  // White particles
        particleSize: 3,          // Larger particles for visibility
        mouseInfluenceRadius: 200,
        mouseForce: 0.1,
        returnForce: 0.015,
        damping: 0.96,
        threeJsVersion: 'r179'
    };

    // Three.js variables
    let scene, camera, renderer, particles;
    let mouse = { x: 0, y: 0, z: 0 };
    let targetMouse = { x: 0, y: 0 };
    let particlePositions, particleVelocities, originalPositions;
    let animationId;
    let isRunning = false;
    let isInitialized = false;

    // Debug: global click handler to detect navigation clicks
    document.addEventListener('click', function(e) {
        var target = e.target.closest('a');
        if (target) {
            var href = target.getAttribute('href');
            console.log('[DEBUG] Click on link:', href);
            if (href && !href.startsWith('#') && !href.startsWith('http')) {
                console.log('[DEBUG] Internal link clicked - checking if SPA navigation...');
            }
        }
    }, true);

    // Check if current page is homepage
    function isHomepage() {
        const path = window.location.pathname;
        const isHome = path.endsWith('/') ||
               path.endsWith('/index.html') ||
               path.endsWith('/index') ||
               path === '/';

        // Also check for GitHub Pages paths
        if (!isHome && path.includes('/opencart-community/')) {
            const parts = path.split('/opencart-community/');
            const after = parts[1];
            return !after || after === '/' || after === 'index.html';
        }

        return isHome;
    }

    // Reset and restart animation with fresh particles
    function restartAnimation() {
        if (!isInitialized || !particles) {
            // If not initialized yet, try to initialize
            init();
            return;
        }

        // Recreate particles with new random positions
        createParticles();

        // Reset mouse position
        mouse.x = 0;
        mouse.y = 0;
        targetMouse.x = 0;
        targetMouse.y = 0;

        // Reset rotation
        particles.rotation.y = 0;
        particles.rotation.x = 0;

        console.log('Animation restarted');
    }

    // Handle URL changes (SPA navigation)
    function handleNavigation() {
        console.log('[DEBUG] handleNavigation called, isHomepage:', isHomepage(), 'path:', window.location.pathname);
        if (isHomepage()) {
            // Small delay to let DOM update
            setTimeout(function() {
                console.log('[DEBUG] Restarting animation after timeout');
                restartAnimation();
            }, 150);
        }
    }

    // Override pushState to detect SPA navigation
    console.log('[DEBUG] Overriding history.pushState');
    var originalPushState = history.pushState;
    history.pushState = function() {
        console.log('[DEBUG] history.pushState called');
        originalPushState.apply(this, arguments);
        handleNavigation();
    };

    // Override replaceState as well
    var originalReplaceState = history.replaceState;
    history.replaceState = function() {
        console.log('[DEBUG] history.replaceState called');
        originalReplaceState.apply(this, arguments);
        handleNavigation();
    };

    // Handle back/forward buttons
    window.addEventListener('popstate', function() {
        console.log('[DEBUG] popstate event fired');
        handleNavigation();
    });

    // MkDocs Material navigation events (Zensical/RxJS)
    // These observables detect navigation via Zensical tabs/links
    // Poll for them as they may not be available immediately on script load
    console.log('[DEBUG] Starting RxJS polling for document$ and location$');

    var documentSubscribed = false;
    var locationSubscribed = false;
    var rxJsPollCount = 0;
    var rxJsPollInterval = setInterval(function() {
        rxJsPollCount++;

        // Debug: log what's available
        if (rxJsPollCount === 1) {
            console.log('[DEBUG] Checking for RxJS observables...');
            console.log('[DEBUG] document$ exists:', typeof document$ !== 'undefined');
            console.log('[DEBUG] location$ exists:', typeof location$ !== 'undefined');
            console.log('[DEBUG] window.rxjs exists:', typeof window.rxjs !== 'undefined');
        }

        // Try to subscribe to document$
        if (!documentSubscribed && typeof document$ !== 'undefined') {
            console.log('[DEBUG] Subscribing to document$');
            document$.subscribe(function() {
                console.log('[DEBUG] document$ fired');
                handleNavigation();
            });
            documentSubscribed = true;
        }

        // Try to subscribe to location$
        if (!locationSubscribed && typeof location$ !== 'undefined') {
            console.log('[DEBUG] Subscribing to location$');
            location$.subscribe(function(path) {
                console.log('[DEBUG] location$ fired with path:', path);
                handleNavigation();
            });
            locationSubscribed = true;
        }

        // Stop polling after 5 seconds (50 * 100ms)
        if (rxJsPollCount >= 50) {
            console.log('[DEBUG] RxJS polling stopped, document$:', documentSubscribed, 'location$:', locationSubscribed);
            clearInterval(rxJsPollInterval);
        }
    }, 100);

    // Also use MutationObserver to detect DOM changes (for SPA navigation)
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    var node = mutation.addedNodes[i];
                    if (node.id === 'attractor' || (node.querySelector && node.querySelector('#attractor'))) {
                        handleNavigation();
                        break;
                    }
                }
            }
        });
    });

    // Start observing when DOM is ready
    function initObserver() {
        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        } else {
            document.addEventListener('DOMContentLoaded', function() {
                observer.observe(document.body, { childList: true, subtree: true });
            });
        }
    }

    // Initialize - load Three.js first if needed
    function init() {
        var container = document.getElementById('attractor');
        if (!container) {
            return;
        }

        var canvas = container.querySelector('canvas');
        if (!canvas) {
            return;
        }

        // Only run on homepage
        if (!isHomepage()) {
            return;
        }

        // Check if already initialized
        if (isInitialized) {
            restartAnimation();
            return;
        }

        // Check if Three.js is already loaded
        if (typeof THREE !== 'undefined') {
            startAnimation(canvas);
            return;
        }

        // Load Three.js dynamically
        loadThreeJs().then(function() {
            startAnimation(canvas);
        }).catch(function(err) {
            console.error('Failed to load Three.js:', err);
        });
    }

    function loadThreeJs() {
        return new Promise(function(resolve, reject) {
            // Check again in case it loaded between check and now
            if (typeof THREE !== 'undefined') {
                resolve();
                return;
            }

            var script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/' + CONFIG.threeJsVersion + '/three.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    function startAnimation(canvas) {
        if (isInitialized) return;
        isInitialized = true;
        isRunning = true;

        // Get dimensions
        var width = window.innerWidth;
        var height = window.innerHeight;

        // Set canvas size
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        // Create Three.js scene
        scene = new THREE.Scene();

        // Create camera
        camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000);
        camera.position.z = 1000;

        // Create renderer with transparent background
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);  // Transparent background

        // Create particles
        createParticles();

        // Event listeners
        document.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onWindowResize);

        // Start animation
        animate();

        console.log('Three.js animation started');
    }

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        init();
        initObserver();
    });

    // Also try on load in case DOMContentLoaded already fired
    window.addEventListener('load', function() {
        if (!isRunning) {
            init();
        }
        initObserver();
    });

    function createParticles() {
        var geometry = new THREE.BufferGeometry();
        particlePositions = new Float32Array(CONFIG.particleCount * 3);
        particleVelocities = new Float32Array(CONFIG.particleCount * 3);
        originalPositions = new Float32Array(CONFIG.particleCount * 3);

        // Initialize particle positions
        for (var i = 0; i < CONFIG.particleCount; i++) {
            var i3 = i * 3;

            // Spread particles in 3D space
            particlePositions[i3] = (Math.random() - 0.5) * 2000;
            particlePositions[i3 + 1] = (Math.random() - 0.5) * 2000;
            particlePositions[i3 + 2] = (Math.random() - 0.5) * 2000;

            // Store original positions for return force
            originalPositions[i3] = particlePositions[i3];
            originalPositions[i3 + 1] = particlePositions[i3 + 1];
            originalPositions[i3 + 2] = particlePositions[i3 + 2];

            // Initial velocities
            particleVelocities[i3] = 0;
            particleVelocities[i3 + 1] = 0;
            particleVelocities[i3 + 2] = 0;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        // Remove old particles if they exist
        if (particles) {
            scene.remove(particles);
            particles.geometry.dispose();
            particles.material.dispose();
        }

        // Create material - bright white with glow effect
        var material = new THREE.PointsMaterial({
            color: CONFIG.particleColor,
            size: CONFIG.particleSize,
            transparent: true,
            opacity: 0.9,
            sizeAttenuation: true
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);
    }

    function onMouseMove(event) {
        // Convert mouse position to normalized coordinates
        targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);

        var canvas = renderer.domElement;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
    }

    function animate() {
        animationId = requestAnimationFrame(animate);

        // Smooth mouse following
        mouse.x += (targetMouse.x - mouse.x) * 0.1;
        mouse.y += (targetMouse.y - mouse.y) * 0.1;

        // Update particle positions
        updateParticles();

        // Rotate scene slightly for depth
        particles.rotation.y += 0.0008;
        particles.rotation.x += 0.0004;

        renderer.render(scene, camera);
    }

    function updateParticles() {
        var positions = particles.geometry.attributes.position.array;

        for (var i = 0; i < CONFIG.particleCount; i++) {
            var i3 = i * 3;

            // Get current position
            var px = positions[i3];
            var py = positions[i3 + 1];
            var pz = positions[i3 + 2];

            // Calculate distance to mouse (in 3D space)
            var mx = mouse.x * 600;
            var my = mouse.y * 600;
            var mz = 0;

            var dx = mx - px;
            var dy = my - py;
            var dz = mz - pz;

            var distSq = dx * dx + dy * dy + dz * dz;
            var dist = Math.sqrt(distSq);

            // Apply mouse attraction force
            if (dist < CONFIG.mouseInfluenceRadius && dist > 0) {
                var force = (1 - dist / CONFIG.mouseInfluenceRadius) * CONFIG.mouseForce;

                particleVelocities[i3] += dx * force;
                particleVelocities[i3 + 1] += dy * force;
                particleVelocities[i3 + 2] += dz * force;
            }

            // Apply return force (pull back to original position)
            particleVelocities[i3] += (originalPositions[i3] - px) * CONFIG.returnForce;
            particleVelocities[i3 + 1] += (originalPositions[i3 + 1] - py) * CONFIG.returnForce;
            particleVelocities[i3 + 2] += (originalPositions[i3 + 2] - pz) * CONFIG.returnForce;

            // Apply damping
            particleVelocities[i3] *= CONFIG.damping;
            particleVelocities[i3 + 1] *= CONFIG.damping;
            particleVelocities[i3 + 2] *= CONFIG.damping;

            // Update positions
            positions[i3] += particleVelocities[i3];
            positions[i3 + 1] += particleVelocities[i3 + 1];
            positions[i3 + 2] += particleVelocities[i3 + 2];
        }

        particles.geometry.attributes.position.needsUpdate = true;
    }
})();
