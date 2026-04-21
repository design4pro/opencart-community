import { useEffect, useRef } from 'react';

const COLORS = ['#04B6F0', '#6958d5', '#53bc28'];
const PARTICLE_COUNT = 150;
const MOUSE_RADIUS = 100;
const CONNECTION_DIST = 100;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

function getThemeBg(): string {
  return document.documentElement.classList.contains('dark')
    ? 'rgba(10, 10, 10, 0.2)'
    : 'rgba(248, 249, 250, 0.3)';
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let running = false;
    let mouseX = 0;
    let mouseY = 0;
    const particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      // canvas.parentElement is <astro-island> which has no dimensions;
      // walk up to the first ancestor with actual size
      let container: HTMLElement | null = canvas.parentElement;
      while (container && container.clientHeight === 0) {
        container = container.parentElement;
      }
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 3 + 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.5 + 0.3,
        });
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      animId = requestAnimationFrame(animate);

      ctx.fillStyle = getThemeBg();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.vx += dx * force * 0.01;
          p.vy += dy * force * 0.01;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.vx += (Math.random() - 0.5) * 0.1;
        p.vy += (Math.random() - 0.5) * 0.1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.2;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    }

    function start() {
      if (running) return;
      resize();
      if (!canvas || canvas.width === 0 || canvas.height === 0) return;
      running = true;
      createParticles();
      animate();
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function onResize() {
      resize();
      createParticles();
    }

    // Observe #attractor (not astro-island which has no dimensions)
    const ro = new ResizeObserver(start);
    const container = document.getElementById('attractor') ?? canvas.parentElement;
    if (container) ro.observe(container);

    // Also try immediately in case layout is already settled
    start();

    window.addEventListener('resize', onResize);
    container?.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener('resize', onResize);
      container?.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}
