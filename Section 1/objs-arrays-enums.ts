// core type of object




// how to create specific object type and assign the structure
// and still this is not recommended but it is possible
// const person: {
//     name:string;
//     age:number;
// } = { // it is infered to object{name:string;age:number} and this is tpye
//     name: "Yousef",
//     age:21
// }
// if we put person:object we will have no autocomplete because typescript will care 
// only about the type and it is object and very generic and if we make for ex
// person.name we will get an error like the under person.nickname
// we need the full support



// console.log(person.nickname)


/**
 * Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say.
 */





// ---- The Type Array And Tuple ----
// const person:{
//     name:string;
//     age:number;
//     hobbies: string[];
//     role:[number,string]
// }  = {
//     name: "Yousef",
//     age:21,
//     hobbies:['sports',"Cooking"],
//     role: [2,'author']
// }
// person.role.push("x") but this is exception and will work
// person.role[1] = 10 // this won't work in tuple




// let favouriteActivities: string[];
// favouriteActivities = ["sports","cooking"]

// and if you want to make an array of more than one type you can use the any type
// we don't want to use it too often because we will lose the benefits typescript gives us

// for(const hobby of person.hobbies){
//     console.log(hobby) // we can benefits from the autocompletion and typescript doesn't complain
                       // because tpye script interfernce the type of hobby is string because
                       // it is from an array of string
// }

// --- Enums ---
enum Role {ADMIN, READ_ONLY,AUTHOR}; // like the c langauge

const person = {
    name: "Yousef",
    age:21,
    hobbies:['sports',"Cooking"],
    role: Role.ADMIN
}

if(person.role === Role.ADMIN) console.log("the user is: " + person.role)

