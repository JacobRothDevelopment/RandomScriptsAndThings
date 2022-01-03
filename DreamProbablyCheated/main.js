var start = new Date();

var bufferSize = 300; // 640
var numRuns = 100000; // 1000000000
var dropRate = 0.1;

var buffer = [];
var maxCount = 0;

var runningCount = 0;
for (let i = 0; i < numRuns; i++) {
  var dropresult = Math.random() < dropRate ? 1 : 0; // 1/0 1 = droped item; 0 = did not

  if (buffer.length >= bufferSize) {
    runningCount -= buffer.shift();
  }
  buffer.push(dropresult);
  runningCount += dropresult;

  var count = runningCount;
  var perc = count / bufferSize;

  if (maxCount < count) {
    maxCount = count;
  }
}

console.log('max count: ', maxCount);
console.log('max perc: ', maxCount / bufferSize);
console.log('run time: ', (new Date() - start) / 1000);
