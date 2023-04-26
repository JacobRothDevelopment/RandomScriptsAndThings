function isPrime(num, primesRef) {
  if (num < 2) {
    return false;
  }

  var i = 0; // this is the index of the primes list
  var sqroot = Math.sqrt(num);
  for (let p = primesRef[0]; p <= sqroot; p = primesRef[i]) {
    if (num % p === 0) {
      return false;
    }
    i++;
  }

  return true;
}

function howManyPrimes(numPrimes) {
  var primes = [];
  var counter = 2;

  while (primes.length < numPrimes) {
    if (isPrime(counter, primes)) {
      primes.push(counter);
    }
    counter++;
  }
  return primes;
}

var primes = howManyPrimes(75000000);

var primeSqSum = 0;

for (let i = 0; i < primes.length; i++) {
  var numPrime = i + 1;
  var prime = primes[i];
  var primeSq = prime * prime;
  primeSqSum += primeSq;

  if (primeSqSum % numPrime === 0) {
    console.log(numPrime + ' :: ' + prime);
  }
}
