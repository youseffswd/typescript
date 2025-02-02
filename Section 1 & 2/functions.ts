function add(n1: number, n2: number) {
    return n1 + n2;
}
// and undefined is a type

// typescript thinks that function cannot return undefined until we make return; so
// the function below cannot accept undefined as a value
function printResult(num: number): void {
    console.log("Result: " + num);
}
function addAndHandle(n1:number,n2:number,cb: (num:number) => void // void is about we don't care about any return
){
    const result = n1 + n2
    cb(result)
}


printResult(add(5,12))

/** Function Types
 * Function => this is the generic type like the object
 * or we can do as below
 */
let combineValues: (a // anyname not related to the original parameters names
    :number,b:number) => number;

combineValues = add;
combineValues = printResult // typescript will complain here casue of the function type we put
// put if we put the :Function type will work just fine

// this won't provide compile error but it should
// cause printResult donesn't take two arguments
console.log(combineValues(8,8))
// combineValues = 5 // will give error

addAndHandle(10,20,(result) => {console.log(result)})