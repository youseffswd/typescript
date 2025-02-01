console.log("hello from the typescript")
/**
 * ! typescript only benefit only during development
 * core types 
 * ! all core types in typescript is lower cases
 * number '1,5.3,-10' all integers and floats
 * string || boolean no truthy or falsy values not boolean
 * object type and we have array type
 * 
 * typescript is static typed language and we set type during development
 * on the other hand javascript is dynamic type and we cannot set types during development
 * 
 */
function add(n1: number,n2: number,showResult: boolean){
    if(showResult){
        console.log(n1 + n2)
    }else{
        return n1 + n2
    }
}
/**
 * type script has something called type inference that can
 * identify the type of a variable 
 * so doing number1:number is not a good practice and it is
 * redundent
 * but will be a good idea when you have 
 * let numberX;
 * so it is better to do it like
 * let numberX:number
 */
let number1 = 5; // all numbers is floats by defualt and there is no difference between 5 and 5.0
const number2 = 2.8;
const printResult = true;

// number1 = "4"; this will produce an error cause of type inference


const result = add(number1,number2,printResult)
console.log(result)