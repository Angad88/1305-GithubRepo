// Question 4 3

function Question4ArrayDuplicate(theArray) {
    let lowestNum
    lowestNum = Infinity;

    let howOften
    howOften = {};

    
    for (let n of theArray) {
        if (howOften[n]) {
            lowestNum = Math.min(lowestNum, n);
        } else {
            howOften[n] = 1;
        }
    }
    return lowestNum;
}

let testArray1;
let smallestDuplicate1;
testArray1 = [4, 10, 5, 1, 11, 5, 1, 4, 1]
smallestDuplicate1 = Question4ArrayDuplicate(testArray1);

let testArray2;
let smallestDuplicate2;
testArray2 = [1, 10, 1, -1, 10, -1]
smallestDuplicate2 = Question4ArrayDuplicate(testArray2);

console.log(`First Array: [${testArray1}]`)
console.log(`Smallest Duplicate found in First Array: ${smallestDuplicate1}`)

console.log(`First Array: [${testArray2}]`)
console.log(`Smallest Duplicate found in First Array: ${smallestDuplicate2}`)