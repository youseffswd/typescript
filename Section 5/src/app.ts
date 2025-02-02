// interface
// describe structure of object

// here we can replace interface with type
// interface Greetable {
//     // cannot has any values
//     name: string;

//     greet(phrase: string): void;
// }
// share functionality amoung different classes
// and every class has to add its implementations
// and we inforce structure
interface Aged {
    age: number;
}
interface Named {
    // cannot has any values
    // and we cannot add private and public and so but we can add the readonly
    // tell the class to instanciate the property once
    // and can be used with type too
    readonly name: string;
    // this called optional property and we can make optional method
    outputName?:string;
}
// we can inherit from mulitble interfaces
interface Greetable  extends Named{
    // greet?(phrase: string): void; like that
    //the optional property and method doesn't enforce the classes that implmeents the interface to add those
    greet(phrase: string): void;
}
class Person implements Greetable, Aged {
    // set by default readonly because we know it implements greatable and that property
    // in greatable is set to readonly
    name: string;
    age: number = 30;
    // we can make optional property in classes
    test?:string;
    constructor(name: string) {
        this.name = name;
    }
    greet(phrase: string): void {
        console.log(phrase + " " + this.name + this.age);
    }
}
let user1: Greetable;

user1 = new Person("Yousef");
user1.greet("Hi ");
