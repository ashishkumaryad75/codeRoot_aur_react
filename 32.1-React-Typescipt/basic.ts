// Primitives : number, string, boolean
// More Complex type : Array , object
// Function Type , parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Root";

let isInstructor: boolean;
isInstructor = true;

// More Complex types

let hobbies: string[];

hobbies = ["Suports", "Cooking"];

// let person: any;
let person: {
    name:string,
    age:number,
};

person = {
  name: "Root",
  age: 23,
};

// // wrong type
// person = {
// isInstructor : false
// }

let people:{
    name:string,
    age:number
}[];// storing as in array the above properties.