"use client";

import { useEffect, useRef } from "react";

export default function Starfield({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let stars = [];
    let meteors = [];
    let nextMeteor = 0;
    let scrollY = window.scrollY;

    const spawn = () => {
      stars = [];
      const count = Math.round((w * h) / 2600);
      for (let i = 0; i < count; i++) {
        const depth = Math.random();
        stars.push({
          x: Math.random() * w,
          y: Math.random() * (h * 1.6),
          r: 0.3 + depth * 1.1,
          a: 0.25 + depth * 0.6,
          depth,
          phase: Math.random() * Math.PI * 2,
          tw: 0.4 + Math.random() * 1.2,
          warm: Math.random() < 0.12,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, w, h);
      const t = now / 1000;
      const docH = Math.max(1, document.documentElement.scrollHeight - h);
      const progress = Math.min(1, scrollY / docH);

      for (const s of stars) {
        const py = (s.y - progress * h * 0.6 * (0.3 + s.depth)) % (h * 1.6);
        const y = py < 0 ? py + h * 1.6 : py;
        if (y > h + 2) continue;
        const twinkle = reduce ? 1 : 0.75 + 0.25 * Math.sin(t * s.tw + s.phase);
        ctx.globalAlpha = s.a * twinkle;
        ctx.fillStyle = s.warm ? "#ffe9c9" : "#dde7ff";
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) {
        if (now > nextMeteor && meteors.length === 0) {
          meteors.push({
            x: w * (0.2 + Math.random() * 0.7),
            y: h * Math.random() * 0.4,
            vx: -(6 + Math.random() * 4),
            vy: 3 + Math.random() * 2,
            life: 0,
            dur: 55 + Math.random() * 25,
          });
          nextMeteor = now + 9000 + Math.random() * 14000;
        }
        meteors = meteors.filter((m) => m.life < m.dur);
        for (const m of meteors) {
          m.life += 1;
          m.x += m.vx;
          m.y += m.vy;
          const k = 1 - m.life / m.dur;
          const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 14, m.y - m.vy * 14);
          grad.addColorStop(0, `rgba(221,231,255,${0.9 * k})`);
          grad.addColorStop(1, "rgba(221,231,255,0)");
          ctx.globalAlpha = 1;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      if (reduce) draw(0);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (reduce) draw(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(90% 50% at 50% 115%, rgba(158,197,255,0.13) 0%, transparent 65%), radial-gradient(45% 55% at 78% 18%, rgba(120,155,235,0.11) 0%, transparent 70%), radial-gradient(35% 45% at 15% 85%, rgba(120,155,235,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <canvas
        ref={ref}
        className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
        aria-hidden="true"
      />
    </>
  );
}
