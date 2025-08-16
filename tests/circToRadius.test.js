const test = require('node:test');
const assert = require('node:assert');
const { circToRadius } = require('../circToRadius');

test('Values below the minimum return 0.1', () => {
  assert.strictEqual(circToRadius(0), 0.1);
  assert.strictEqual(circToRadius(-50), 0.1);
});

test('Values above the maximum return 2.0', () => {
  assert.strictEqual(circToRadius(10000), 2.0);
});

test('Mid-range values are scaled correctly', () => {
  const circumference = 100; // cm
  const expected = (circumference / (2 * Math.PI)) * 0.02;
  assert.strictEqual(circToRadius(circumference), expected);
});
