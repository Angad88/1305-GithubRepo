// Question 2 Code

function Question2TargetArray(number, targ) {
    if (number.includes(targ)) {
        return number.indexOf(targ);
      }
      if (number[number.length - 1] < targ) {
        return number.length;
      }
      if (number[0] > targ) {
        return 0;
      }
      for (let i = 0; i < number.length; i++) {
        let elem;
        let nextElem;
        
        elem = number[i];
        nextElem = number[i + 1];
        if (elem < targ && nextElem > targ) {
          return i + 1;
        }
      }
}


let testArray1;
testArray1 = [1,3,5,6];

let target1 = 5;

let target2 = 2;

console.log(`The First Array is: [${testArray1}] using ${target1} as the Target`);
console.log(`Output: ${Question2TargetArray(testArray1, target1)}`)

console.log(`The First Array is: [${testArray1}] using ${target2} as the Target`);
console.log(`Output: ${Question2TargetArray(testArray1, target2)}`)

