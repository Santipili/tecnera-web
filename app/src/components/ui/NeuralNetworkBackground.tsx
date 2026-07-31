"use client";
import { useEffect, useRef } from "react";

interface NeuralNetworkBackgroundProps {
  className?: string;
  nodeCount?: number;
  color?: string;
}

// verde característico de Tecnera (#00A478)
const GREEN = "0, 164, 120";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

// pesos relativos 60 / 40 / 25 (se normalizan a continuación)
const SIZE_TIERS = [
  { weight: 60, radius: [1.4, 2.5] as const, speed: 0.35, opacity: 0.38 },
  { weight: 40, radius: [2.5, 3.35] as const, speed: 0.28, opacity: 0.48 },
  { weight: 25, radius: [3.35, 4.45] as const, speed: 0.2, opacity: 0.58 },
];

const TOTAL_WEIGHT = SIZE_TIERS.reduce((sum, tier) => sum + tier.weight, 0);

function pickTier() {
  const r = Math.random() * TOTAL_WEIGHT;
  let acc = 0;
  for (const tier of SIZE_TIERS) {
    acc += tier.weight;
    if (r <= acc) return tier;
  }
  return SIZE_TIERS[0];
}

export default function NeuralNetworkBackground({
  className,
  nodeCount,
  color = GREEN,
}: NeuralNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let animationId = 0;

    const initNodes = () => {
      // densidad y tamaño en función del ancho real del canvas: en pantallas
      // chicas (mobile) se ve mucho más saturado con la misma cantidad/tamaño
      // de nodos que en desktop, así que ambos escalan hacia abajo.
      const sizeScale = width < 480 ? 0.55 : width < 768 ? 0.7 : width < 1024 ? 0.85 : 1;
      const count = nodeCount
        ? Math.round(nodeCount * sizeScale)
        : Math.round(Math.min(290, Math.max(40, (width * height) / 5400)));

      nodes = Array.from({ length: count }, () => {
        const tier = pickTier();
        const radius = (tier.radius[0] + Math.random() * (tier.radius[1] - tier.radius[0])) * sizeScale;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * tier.speed,
          vy: (Math.random() - 0.5) * tier.speed,
          radius,
          opacity: tier.opacity,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    resize();
    window.addEventListener("resize", resize);

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      const connectDist = Math.min(Math.max(Math.min(width, height) * 0.22, 90), 170);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x <= n.radius || n.x >= width - n.radius) n.vx *= -1;
        if (n.y <= n.radius || n.y >= height - n.radius) n.vy *= -1;
        n.x = Math.max(n.radius, Math.min(width - n.radius, n.x));
        n.y = Math.max(n.radius, Math.min(height - n.radius, n.y));
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const opacity = (1 - dist / connectDist) * 0.4;
            ctx.strokeStyle = `rgba(${color},${opacity})`;
            ctx.lineWidth = 1.65;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${n.opacity})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(step);
      }
    };

    step();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [nodeCount, color]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
