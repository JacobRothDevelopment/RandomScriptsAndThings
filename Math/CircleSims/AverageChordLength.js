/* 
find average length of a chord in a unit circle 

assume: 
  1) the line from P1 to P2 is a chord on the unit circle centered on a point C at (0,0) 
  2) Θ is the angle from P1, C, and P2
  3) P1 is always translated to (1,0)
  4) Θ is uniformly distributed

derived formulae (will not prove here)
d = √(2(1 - x2)) where x2 is the x component of P2
putting this in terms of Θ:
  x2 = x1*cos(θ) − y1*sin(θ) // treating P2 as a copy of P1 being rotated by Θ degrees
  x2 = x1*cos(θ) // since y1 = 0 (y1 is y component of P1)
  d = √(2(1 - x1*cos(θ)))
  d = √(2(1 - cos(θ))) // since x1 = 1
*/

//#region CONST
const numSamples = 100000;

const average = (array) => array.reduce((a, b) => a + b) / array.length;
const chordLength = (theta) => Math.sqrt(2 * (1 - Math.cos(theta)));
//#endregion CONST

let distances = [];
for (let i = 0; i < numSamples; i++) {
  const theta = Math.random() * 360; // get random number from 0 - 360
  const d = chordLength(theta);
  distances.push(d);
  // console.log(`${theta} : ${d}`);
}

console.log(average(distances));
