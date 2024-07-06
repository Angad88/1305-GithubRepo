// Time Complexity is O(n)

function Question1(array, n) {
    let realSum = array.reduce((a, b) => a + b, 0);
    let theExpectedSum = (n + 1);
    theExpectedSum /= 2;
    theExpectedSum *= n;
    SumFinal = theExpectedSum - realSum
    return SumFinal;
}



let arrayTest1 = [9,5,3,2,6,1,7,8,10];
let n1 = 10;
console.log(`First Array: [${arrayTest1}], n = ${n1}`);
console.log(`Missing number = ${Question1(arrayTest1, 10)}`);

let arrayTest2 = [5,4,1,2];
let n2 = 5;
console.log(`First Array: [${arrayTest2}], n = ${n2}`);
console.log(`Missing number = ${Question1(arrayTest2, 5)}`);



