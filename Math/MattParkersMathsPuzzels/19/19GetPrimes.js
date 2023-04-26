function isPrime (num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) {
            return false; 
        }
    return num > 1;
}

function howManyPrimes(numPrimes) {
    // var primes = [];
    var totalPrimes = 0;
    var counter = 2;
    while(totalPrimes < numPrimes) {
        if(isPrime(counter)) {
            // primes.push(counter);
            totalPrimes++;
            console.log(counter); // print so bash script can output it;
        }
        counter++;
    }
    return primes;
}

primes = howManyPrimes(100000000);
// primes.forEach(element => console.log(element));
