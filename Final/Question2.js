// Question 2 Code

function Question2TargetArray(number, target) {
    let l;
    let h; 
    l = 0;
    h = number.length - 1;

    while (l <= h) {
        let Middle = Math.floor((l + h) / 2);

        if (number[Middle] == target) {
            return Middle;
        } else if (number[Middle] < target) {
            l = Middle + 1;
        } else {
            h = Middle - 1;
        }
    }

    return l; 
}


let testArray1;
testArray1 = [1,3,5,6];

let target1 = 5;

let target2 = 2;

console.log(`The First Array is: [${testArray1}] using ${target1} as the Target`);
console.log(`Output: ${Question2TargetArray(testArray1, target1)}`)

console.log(`The First Array is: [${testArray1}] using ${target2} as the Target`);
console.log(`Output: ${Question2TargetArray(testArray1, target2)}`)

