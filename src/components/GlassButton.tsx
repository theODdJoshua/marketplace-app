import React from 'react';

const GlassButton = ({ children, ...props }) => (
  <button className="glass-btn hover:scale-105 transition-all duration-300" {...props}>
    {children}
  </button>
);

export default GlassButton;