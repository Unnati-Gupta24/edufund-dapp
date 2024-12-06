import React from "react";

interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function NeonInput({ label, ...props }: NeonInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-cyan-400 text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full bg-gray-900/50 border-2 border-cyan-400 rounded-lg px-4 py-2
          text-white placeholder-cyan-300/50 focus:outline-none focus:ring-2 
          focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
      />
    </div>
  );
}
