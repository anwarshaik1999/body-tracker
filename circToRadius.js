function circToRadius(circumference){
  const radius = (circumference / (2 * Math.PI)) * 0.02;
  return Math.max(0.1, Math.min(radius, 2.0));
}

if (typeof module !== 'undefined') {
  module.exports = { circToRadius };
} else {
  window.circToRadius = circToRadius;
}
