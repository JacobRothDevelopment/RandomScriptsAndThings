function getMaxSum(nums) {
    num1 = Math.max(...nums);

    var index = nums.indexOf(num1);
    nums.splice(index, 1);
    num2 = Math.max(...nums);

    return num1 + num2;
}

function isPrime (num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) {
            return false; 
        }
    return num > 1;
}

function getPrimesUpTo(int) {
    var primes = [];
    for (let i = 2; i <= int; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function createEmptySumMatrix(length) {
    var matrix = [];
    for (let i = 0; i < length; i++) {
        var row = []
        for (let j = 0; j < length; j++) {
            row.push(NaN);
        }
        matrix.push(row);
    }
    return matrix;
}

function fillMatrix(matrix, indexNumbers, allowedValues) {
    for (let r = 0; r < matrix.length; r++) {
        var num1 = indexNumbers[r];// excluding diagonal values in matrix b/c 

        for (let c = 0; c < matrix.length; c++) {
            var num2 = indexNumbers[c];
            var sum = num1 + num2;

            // excluding diagonal values in matrix 
            //  b/c a number would not be added to iself
            
            if (allowedValues.includes(sum) && c != r) { 
                matrix[r][c] = sum;
            } else {
                matrix[r][c] = -1;
            }
        }
    }
}

function prettyPrint(matrix, numbers = null, showHalf = false) {
    if (numbers != null) {
        var numbersString = ''; 
        numbers.forEach(val => {
            numbersString += `\t${val}`;
        });
        console.log(numbersString + '\n');
    }

    for (let r = 0; r < matrix.length; r++) {
        var rowString = numbers[r] + '\t';
        
        for (let c = 0; c < matrix.length; c++) {
            var val = matrix[r][c];
            var gt = r > c;
            if (val > 0 && (gt || (gt == showHalf))) {
                rowString += `${val}\t`;
            } else {
                rowString += '-\t';
            }
        }
        console.log(rowString);
    }
}

function sum(arr) {
    var sum = 0;
    arr.forEach(int => {
        sum += int;
    });
    return sum;
}

const numbers = [1,2,3,4,5,6,7,8,9];

var maxSum = getMaxSum([...numbers]);
var primes = getPrimesUpTo(maxSum);
var matrix = createEmptySumMatrix(numbers.length);
fillMatrix(matrix, numbers, primes);
prettyPrint(matrix, numbers, true);

console.log(sum([...numbers]));
