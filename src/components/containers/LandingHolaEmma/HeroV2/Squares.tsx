'use client';

import { useRef, useEffect } from 'react';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
  className?: string;
}

const Squares: React.FC<SquaresProps> = ({
  direction = 'diagonal',
  speed = 0.34,
  borderColor = '#09150e',
  squareSize = 30,
  hoverFillColor = '#031109',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<GridOffset | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth || window.innerWidth;
      canvas.height = parent.clientHeight || window.innerHeight;
    };

    requestAnimationFrame(() => {
      resizeCanvas();
      drawGrid();
    });

    window.addEventListener('resize', resizeCanvas);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x, y } = gridOffset.current;

      for (let i = -squareSize; i < canvas.width + squareSize; i += squareSize) {
        for (let j = -squareSize; j < canvas.height + squareSize; j += squareSize) {
          const drawX = i + (x % squareSize);
          const drawY = j + (y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor(i / squareSize) === hoveredSquareRef.current.x &&
            Math.floor(j / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(drawX, drawY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1;
          ctx.strokeRect(drawX, drawY, squareSize, squareSize);
        }
      }
    };

    const updateAnimation = () => {
      const s = Math.max(speed, 0.05);
      gridOffset.current.x += s;
      gridOffset.current.y += s;
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      hoveredSquareRef.current = {
        x: Math.floor(mouseX / squareSize),
        y: Math.floor(mouseY / squareSize),
      };
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return <canvas ref={canvasRef} className={`w-full h-full block ${className}`} />;
};

export default Squares;
