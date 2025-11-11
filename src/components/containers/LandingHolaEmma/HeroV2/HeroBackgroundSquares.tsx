'use client';

import Squares from './Squares';

export function HeroBackgroundSquares() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Canvas animado con hover habilitado */}
      <Squares
        direction="diagonal"
        squareSize={30}
        speed={0.34}
        borderColor="#091a10"
        hoverFillColor="#031109"
        className="w-full h-full pointer-events-auto"
      />

      {/* Overlay de profundidad suave */}
      <div
        className="
          absolute inset-0
          bg-gradient-radial from-[rgba(0,0,0,0.15)] to-transparent
          opacity-80 backdrop-blur-[1px]
          pointer-events-none
        "
      />
    </div>
  );
}
