import React from 'react';

const SkillCircle = ({ percentage = 91, size = 120, strokeWidth = 24 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(168deg)' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FEE140" />
            <stop offset="100%" stopColor="#FA709A" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1a1a1a"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Foreground Gradient Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />

        {/* Inner Circle to fill center */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth / 2}
          fill="black"
        />
      </svg>

      {/* Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
        97%
      </div>
    </div>
  );
};

export default SkillCircle;
