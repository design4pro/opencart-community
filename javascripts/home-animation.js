/**
 * Particle Animation for Homepage
 * Simple canvas-based particle animation with OpenCart colors
 */

(function() {
    'use strict';

    // Theme detection - MkDocs Material uses data-md-color-scheme on body
    function getTheme() {
        const body = document.body;
        const scheme = body.getAttribute('data-md-color-scheme');
        return scheme === 'default' ? 'light' : 'dark';
    }

    // Background colors for each theme mode
    const THEME_COLORS = {
        dark: 'rgba(10, 10, 10, 0.2)',
        light: 'rgba(248, 249, 250, 0.3)'
    };

    // Current theme cache
    let currentTheme = 'dark';

    // Configuration
    const COLORS = ['#04B6F0', '#6958d5', '#53bc28'];
    const PARTICLE_COUNT = 150;
    const MOUSE_RADIUS = 100;

    let canvas, ctx;
    let particles = [];
    let mouseX = 0, mouseY = 0;
    let animationId;
    let isInitialized = false;

    // Check if current page is homepage (including language variants)
    function isHomepage() {
        const path = window.location.pathname;
        const isHome = path.endsWith('/') ||
               path.endsWith('/index.html') ||
               path.endsWith('/index') ||
               path === '/' ||
               path === '/en/' ||
               path === '/pl/';
        return isHome;
    }

    // Initialize
    function init() {
        const container = document.getElementById('attractor');
        if (!container) return;
        if (!isHomepage()) return;
        if (isInitialized) return;

        // Mark body as homepage for CSS targeting
        document.body.setAttribute('data-homepage', 'true');

        // Get or create canvas
        canvas = container.querySelector('canvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            container.appendChild(canvas);
        }

        ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Canvas 2d context not available');
            return;
        }

        // Style the canvas
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';

        // Set size
        resize();
        window.addEventListener('resize', resize);

        // Track mouse
        document.addEventListener('mousemove', onMouseMove);

        // Listen for theme changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'data-md-color-scheme') {
                    currentTheme = getTheme();
                    console.log('Theme changed to:', currentTheme);
                }
            });
        });
        observer.observe(document.body, { attributes: true });

        // Create particles
        createParticles();

        // Start animation
        isInitialized = true;
        animate();

        console.log('Particle animation initialized');
    }

    function resize() {
        const container = document.getElementById('attractor');
        if (!container) return;

        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                radius: Math.random() * 3 + 2,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                alpha: Math.random() * 0.5 + 0.3
            });
        }
    }

    function onMouseMove(e) {
        const container = document.getElementById('attractor');
        if (!container) return;

        const rect = container.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    }

    function animate() {
        if (!isInitialized) return;

        animationId = requestAnimationFrame(animate);

        // Clear canvas with theme-aware background color
        const theme = getTheme();
        ctx.fillStyle = THEME_COLORS[theme];
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(function(p) {
            // Mouse attraction
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_RADIUS) {
                const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                p.vx += dx * force * 0.01;
                p.vy += dy * force * 0.01;
            }

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Boundary wrap
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // Friction
            p.vx *= 0.99;
            p.vy *= 0.99;

            // Add slight drift
            p.vx += (Math.random() - 0.5) * 0.1;
            p.vy += (Math.random() - 0.5) * 0.1;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
            ctx.globalAlpha = 1;
        });

        // Draw connections
        particles.forEach(function(p1, i) {
            particles.slice(i + 1).forEach(function(p2) {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = p1.color;
                    ctx.globalAlpha = (1 - dist / 100) * 0.2;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            });
        });
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('load', function() {
        if (!isInitialized) init();
    });

})();

/**
 * Navigation translation - translates labels and fixes links for Polish language
 */
(function() {
    'use strict';

    // Check if this is a Polish page
    const path = window.location.pathname;
    const isPolish = path.includes('/pl/') || path.startsWith('/pl');
    if (!isPolish) return;

    // Prevent multiple runs
    if (window.__navTranslated) return;
    window.__navTranslated = true;

    const translations = {
        'Getting Started': 'Pierwsze kroki',
        'Extensions': 'Rozszerzenia',
        'Troubleshooting': 'Rozwiązywanie problemów',
        'Support': 'Pomoc',
        'Home': 'Strona główna'
    };

    function translateNavigation() {
        // Translate sidebar and tabs navigation links
        const navLinks = document.querySelectorAll('.md-nav__link, .md-tabs__link');
        navLinks.forEach(function(link) {
            // Fix href - change /en/ to /pl/
            const href = link.getAttribute('href');
            if (href && href.includes('/en/') && !href.includes('/opencart-community/')) {
                link.setAttribute('href', href.replace('/en/', '/pl/'));
            }

            // Translate text
            const span = link.querySelector('.md-ellipsis');
            const text = span ? span.textContent.trim() : link.textContent.trim();
            if (!text || text === 'none') return;

            if (translations[text]) {
                if (span) span.textContent = translations[text];
                else link.textContent = translations[text];
            }
        });

        // Fix header logo link
        const logoLink = document.querySelector('.md-logo');
        if (logoLink) {
            const href = logoLink.getAttribute('href');
            if (href && href.includes('/en/') && !href.includes('/opencart-community/')) {
                logoLink.setAttribute('href', href.replace('/en/', '/pl/'));
            }
        }
    }

    // Run after delays to ensure DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', translateNavigation);
    } else {
        translateNavigation();
    }
    setTimeout(translateNavigation, 500);
    setTimeout(translateNavigation, 1000);
})();
