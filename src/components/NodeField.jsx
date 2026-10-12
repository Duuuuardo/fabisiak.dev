"use client";

import { useEffect, useRef } from "react";

const hexToRgb = (hex) => {
  const v = parseInt(hex.slice(1), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
};

const rgba = (rgb, a) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;

export default function NodeField({
  variant = "field",
  accent = "#8fb0f2",
  base = "#96a3b8",
  density = 1,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const acc = hexToRgb(accent);
    const bas = hexToRgb(base);

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let nodes = [];
    let pulses = [];
    let lastPulse = 0;

    const spawnNodes = () => {
      nodes = [];
      const n = Math.max(14, Math.round(((w * h) / 16000) * density));
      if (variant === "orbit") {
        const radii = [0.28, 0.45, 0.62];
        radii.forEach((r, ri) => {
          const count = Math.round(n / 3);
          for (let i = 0; i < count; i++) {
            nodes.push({
              orbit: r * Math.min(w, h),
              angle: (Math.PI * 2 * i) / count + ri * 0.7,
              speed: (0.00008 + ri * 0.00003) * (ri % 2 ? -1 : 1),
              x: 0,
              y: 0,
            });
          }
        });
        return;
      }
      for (let i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: variant === "flux" ? 0.12 + Math.random() * 0.25 : (Math.random() - 0.5) * 0.18,
          vy: variant === "flux" ? (Math.random() - 0.5) * 0.05 : (Math.random() - 0.5) * 0.18,
        });
      }
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawnNodes();
    };

    const edges = [];
    const computeEdges = () => {
      edges.length = 0;
      const max = variant === "field" ? Math.min(w, h) * 0.22 : Math.min(w, h) * 0.3;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < max) edges.push([i, j, d / max]);
        }
      }
    };

    const stepNodes = () => {
      const cx = w / 2;
      const cy = h / 2;
      for (const node of nodes) {
        if (variant === "orbit") {
          node.angle += node.speed * 16;
          node.x = cx + Math.cos(node.angle) * node.orbit;
          node.y = cy + Math.sin(node.angle) * node.orbit;
          continue;
        }
        node.x += node.vx;
        node.y += node.vy;
        if (variant === "flux") {
          if (node.x > w + 4) {
            node.x = -4;
            node.y = Math.random() * h;
          }
          node.y = Math.max(-4, Math.min(h + 4, node.y));
          continue;
        }
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }
    };

    const spawnPulse = (now) => {
      if (now - lastPulse < 1100) return;
      lastPulse = now;
      if (variant === "broadcast" || variant === "orbit") {
        const target = nodes[Math.floor(Math.random() * nodes.length)];
        if (target) pulses.push({ type: "spoke", target, t: 0, dur: 900 });
        return;
      }
      if (edges.length) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ type: "edge", a: nodes[e[0]], b: nodes[e[1]], t: 0, dur: 800 });
      }
    };

    const draw = (now, staticFrame) => {
      ctx.clearRect(0, 0, w, h);
      if (!staticFrame) stepNodes();
      computeEdges();
      if (!staticFrame) spawnPulse(now);

      if (variant === "broadcast" || variant === "orbit") {
        const cx = w / 2;
        const cy = h / 2;
        ctx.fillStyle = rgba(acc, 0.9);
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fill();
        for (const node of nodes) {
          ctx.strokeStyle = rgba(bas, 0.16);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      }

      for (const [i, j, fade] of edges) {
        if (variant !== "field" && variant !== "flux") break;
        const limit = variant === "flux" ? 0.55 : 0.28;
        ctx.strokeStyle = rgba(bas, limit * (1 - fade));
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }

      pulses = pulses.filter((p) => p.t < 1);
      for (const p of pulses) {
        if (!staticFrame) p.t = Math.min(1, p.t + 16 / p.dur);
        const px = p.type === "spoke" ? w / 2 : p.a.x;
        const py = p.type === "spoke" ? h / 2 : p.a.y;
        const tx = p.type === "spoke" ? p.target.x : p.b.x;
        const ty = p.type === "spoke" ? p.target.y : p.b.y;
        const x = px + (tx - px) * p.t;
        const y = py + (ty - py) * p.t;
        ctx.strokeStyle = rgba(acc, 0.5 * (1 - p.t));
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillStyle = rgba(acc, 0.95);
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const node of nodes) {
        ctx.fillStyle = rgba(bas, variant === "field" ? 0.7 : 0.85);
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now) => {
      if (!running) return;
      draw(now, false);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0, true);
    });
    ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !reduce) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(loop);
      }
    });
    io.observe(canvas);

    if (reduce) {
      draw(0, true);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [variant, accent, base, density]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
