var start = new Date();

var bufferSize = 640; // 640
var numRuns = 10000000; // 1000000000
var dropRate = 0.5; // 0.5 for blaze rod

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

console.log('max drops: ', maxCount);
console.log('max perc:  ', (maxCount * 100) / bufferSize + ' %');
console.log('run time:  ', (new Date() - start) / 1000 + ' s');
