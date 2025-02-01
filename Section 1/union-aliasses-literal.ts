
// type alisaes/ custom types
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string"
type User = {name:string;age:number}

const user:User = {
    name:"Mohamed",
    age:35
}


// function combine(input1: number | string,input2: number | string){

//     return input1 + input2 // this gives error because typescript doesn't check what exist in the union types
//                      /       // and assuming that maybe type in the union doesn't expect strings
// }

// const combinedAges = combine(30,26)
// console.log(combinedAges)

// const combinedNames = combine("max","anna")
// console.log(combinedNames)

// literial type
// the literal tpye is to set like let x: 5: 10; so the variable x will be only literal value 5 or "union" literial value 10
function combine(input1: Combinable, input2: Combinable) {
    if(typeof input1 === "number" && typeof input2 === "number") return input1 + input2;
    else return input1.toString() + input2.toString();
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("max", "anna");
console.log(combinedNames);
