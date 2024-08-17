// Question 1 3

function Question1Reversing(k) {
    let NegativeCheck;
    if (k < 0) {
        NegativeCheck = -1;
    }   
    else {
        NegativeCheck = 1;
    }
    let NumberReversed;
    
    NumberReversed = parseInt(Math.abs(k).toString().split('').reverse().join('')) * NegativeCheck;
    return NumberReversed;
}

let testNumber1;
testNumber1 = 123;
console.log(`The First number: ${testNumber1}`);
console.log(`The First number Reversed: = ${Question1Reversing(testNumber1)}`);

let testNumber2;
testNumber2 = -456;
console.log(`The First number: ${testNumber2}`);
console.log(`The First number Reversed: = ${Question1Reversing(testNumber2)}`);