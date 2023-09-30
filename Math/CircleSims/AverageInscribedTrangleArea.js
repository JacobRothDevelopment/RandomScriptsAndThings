/*
find average area of a triangle inscribed in a unit circle
assume: 
  1) the points P1, P2, P3 are on the unit circle centered on a point C at (0,0) 
  2) Θ_n is the angle from P1, C, and Pn, for n in {2,3}
  3) P1 is always translated to (1,0)
  4) Θ_n is uniformly distributed

use heron's formula:
  given side lengths a, b, and c
  s = (a + b + c) / 2
  Area = √(s(s-a)(s-b)(s-c))

derived formulae:
  given point P1 (1,0) and θn
  https://math.stackexchange.com/a/2431
*/

const { Matrix } = require('./../matrix');
const { Point } = require('./../point');

//#region CONST
const startTime = process.hrtime();
const numSamples = 10000000; // node max: 112813858

const average = (array) => array.reduce((a, b) => a + b) / array.length;
const deg2rad = (degrees) => degrees * (Math.PI / 180);
const heron_s = (a, b, c) => (a + b + c) / 2;

function heron(a, b, c) {
  const s = heron_s(a, b, c);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

/**
 * @param {Point} p1
 * @param {Point} p2
 * @returns
 */
function distance(p1, p2) {
  const a = p1.x - p2.x;
  const b = p1.y - p2.y;
  d = Math.sqrt(a ** 2 + b ** 2);
  return d;
}

function getPoint() {
  const theta = Math.random() * 360; // get random number [0, 360)
  const matrix = new Matrix([
    [Math.cos(deg2rad(theta)), Math.sin(deg2rad(theta)) * -1],
    [Math.sin(deg2rad(theta)), Math.cos(deg2rad(theta))],
  ]);
  var p = Point.fromVector(matrix.dot(p1.toVector()));
  return p;
}

const p1 = new Point(1, 0);
//#endregion CONST

let areas = [];
for (let i = 0; i < numSamples; i++) {
  const p2 = getPoint();
  const p3 = getPoint();

  const a = distance(p1, p2);
  const b = distance(p1, p3);
  const c = distance(p3, p2);

  const area = heron(a, b, c);
  areas.push(area);
}

const avgArea = average(areas);

const endTime = process.hrtime();

const microTime = (endTime[1] - startTime[1]) / 1000000000;
const secondsTime = endTime[0] - startTime[0];
const totalTime = secondsTime + microTime;

console.log(`${numSamples} samples in ${totalTime} s`);
console.log(`${Math.trunc(numSamples / totalTime)} samples per second`);
console.log(avgArea);
