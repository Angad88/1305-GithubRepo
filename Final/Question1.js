// Question 1 

function Question1Reversing(x) {
    let b;
    let reversed;
    let output;
    let checkNegative;

    b = Math.pow(2,31) - 1   

    reversed= x.toString().split('').reverse().join('') 

    output = parseInt(reversed)

    checkNegative = 1;

    if( x < 0 ){
        checkNegative = -1;
    }

    output *= checkNegative;
    return output;
}

let testNumber1;
testNumber1 = 123;
console.log(`The First number: ${testNumber1}`);
console.log(`The First number Reversed: = ${Question1Reversing(testNumber1)}`);

let testNumber2;
testNumber2 = -456;
console.log(`The First number: ${testNumber2}`);
console.log(`The First number Reversed: = ${Question1Reversing(testNumber2)}`);