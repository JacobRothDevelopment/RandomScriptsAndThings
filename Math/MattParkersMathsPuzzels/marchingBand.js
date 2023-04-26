function calculate(num){
    var str = [];
    for (i=1;i<=num;i++){
        if (num % i == 0){
            str.push(i);
        }
    }
    return str;
}

var currentNumber = 2;
var goalFactors = 64;
var currentFactors = 0;

while(currentFactors !== goalFactors){
    currentNumber++;
    var factors = calculate(currentNumber);
    currentFactors = factors.length;
    console.log(currentNumber, currentFactors);
}

console.log('DONE!!!!!!!!!!!!');

// 128:         83160
// 64:          7560
