// Time Complexity is O(n)


function Question2FirstSolution(ns, t) {
    let comMap = {};
    for (let k = 0; k < ns.length; k++) {
        let number = ns[k];
        let comp = t;
        comp -= number;
        if (comp in comMap) {
            let output = [comMap[comp], k]
            return output;
        }
        comMap[number] = k;
    }
}

let arrayTest1 = [20,1,5,2,11];
let t1 = 3;
console.log(`First Array: [${arrayTest1}], Target = ${t1}`);
console.log(`Ouput: [ ${Question2FirstSolution(arrayTest1,t1)} ]`);


let arrayTest2 = [3,2,4];
let t2 = 6;
console.log(`Second Array: [${arrayTest2}], Target = ${t2}`);
console.log(`Ouput: [ ${Question2FirstSolution(arrayTest2,t2)} ]`);
 
