import React from "react";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function NeonButton({
  children,
  onClick,
  className = "",
  type = "button",
}: NeonButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg bg-transparent border-2 border-cyan-400 
        text-white font-medium transition-all duration-300
        hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
        ${className}`}
    >
      {children}
    </button>
  );
}
