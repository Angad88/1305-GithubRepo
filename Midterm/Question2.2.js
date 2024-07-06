// Time Complexity is O(n^2)


function Question2SecondSolution(ns, t) {
    for (let k = 0; k < ns.length; k+=1) {
        for (let j = (k += 1); j < ns.length; j+=1) {
            if ((ns[j] + ns[k]) == t) {
                let output = [k, j]
                return output;
            }
        }
    }
}

let arrayTest1 = [20,1,5,2,11];
let t1 = 3;
console.log(`First Array: [${arrayTest1}], Target = ${t1}`);
console.log(`Ouput: [ ${Question2SecondSolution(arrayTest1,t1)} ]`);


let arrayTest2 = [3,2,4];
let t2 = 6;
console.log(`Second Array: [${arrayTest2}], Target = ${t2}`);
console.log(`Ouput: [ ${Question2SecondSolution(arrayTest2,t2)} ]`);
 