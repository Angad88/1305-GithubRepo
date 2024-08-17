// Question 4 

function Question4ArrayDuplicate(theArray) {
    let arrayX;
    let output
    arrayX= new Array(theArray.length+1).fill(0)
    for(let x of theArray){
        arrayX[x]++
    }
    output=[]
    for(let i=0;i<arrayX.length;i++){
        if(arrayX[i]==2)output.push(i)
    }
    return output
}

let testArray1;
let Duplicate1;
testArray1 = [4, 10, 5, 1, 11, 5, 1, 4, 1]
smallestDuplicate1 = Question4ArrayDuplicate(testArray1);

let testArray2;
let Duplicate2;
testArray2 = [1, 10, 1, -1, 10, -1]
smallestDuplicate2 = Question4ArrayDuplicate(testArray2);

console.log(`First Array: [${testArray1}]`)
console.log(`Duplicates found in First Array: ${smallestDuplicate1}`)

console.log(`First Array: [${testArray2}]`)
console.log(`Duplicates found in First Array: ${smallestDuplicate2}`)