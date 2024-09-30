import React from 'react';

function ProgressSpeedometer({ percentage }) {
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-[200px] h-[200px] flex justify-center items-center">
      {/* Speedometer background */}
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="12"
          fill="none"
        />
      </svg>

      {/* Speedometer progress */}
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="url(#grad1)"
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference} /* Full circumference */
          strokeDashoffset={strokeDashoffset} /* Dynamic based on percentage */
          strokeLinecap="round"
          className="speedometer-circle"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C00000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF3030', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Speedometer percentage value */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-gray-200 text-lg font-bold">
        {percentage}%
      </div>
    </div>
  );
}

export default ProgressSpeedometer;
