import React from 'react';

const ProgressRing = ({ radius, stroke, progress }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke='blue'
        fill='white'
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />{' '}
      <text
        x='50%'
        y='50%'
        textAnchor='middle'
        stroke='blue'
        fill='blue'
        strokeWidth='1px'
        dy='.5em'
      >
        {progress}%
      </text>
    </svg>
  );
};

export default ProgressRing;
