import React from 'react';

const style = {
  display: 'inline-block',
  color: 'rgb(0, 188, 212)',
  fill: 'rgb(0, 188, 212)',
  height: '24px',
  width: '24px',
  userSelect: 'none',

  fontSize: '12px',
};

export default ({ number })=> (
  <svg viewBox="0 0 24 24" style={style}>
    <circle cx="12" cy="12" r="10"></circle>
    <text x="12" y="16" textAnchor="middle"
          fontSize="12" fill="#fff">
      {number}
    </text>
  </svg>
  
);
