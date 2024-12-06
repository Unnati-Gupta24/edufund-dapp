import React from "react";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
}

export function NeonCard({ children, className = "" }: NeonCardProps) {
  return (
    <div
      className={`bg-gray-900/80 backdrop-blur-lg border-2 border-cyan-400 
      rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.3)] p-6
      hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300
      ${className}`}
    >
      {children}
    </div>
  );
}
