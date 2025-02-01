let userInput: unknown; // more restrictive than any
let userName: string;

userInput = 5;
userInput = "Max"
userName = userInput // because we don't the type will be in the unknow so we cannot be sure it will be a string

// to make that works
if(typeof userInput === "string"){
    userName = userInput
}


// the never type
function generateError(message:string,code:number): never {
    throw {
        message,errorCode:code
    }
    // and we can use never too if there is an infinite loop  
}

