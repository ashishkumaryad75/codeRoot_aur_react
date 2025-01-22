// Primitives : number, string, boolean
// More Complex type : Array , object
// Function Type , parameters

// Primitives

let age11: number;
age11 = 12;

let userName: string;
userName = "Root";

let isInstructor: boolean;
isInstructor = true;

// More Complex types

let hobbies: string[];

hobbies = ["Suports", "Cooking"];

// let person: any;
let person: {
  name: string;
  age: number;
};

person = {
  name: "Root",
  age: 23,
};

// // wrong type
// person = {
// isInstructor : false
// }

let people: {
  name: string;
  age: number;
}[]; // storing as in array the above properties.

// Type Interface
let course = "React the complete guide";

// course = 36745;//error due to type

// Type Union
let courses: string | number = "React the complete guide";

courses = 36745;

// both types are valid due to type union.
let userNames: string | string[];
userNames = "Coding-root";
userNames = ["coding", "root"];

// Type Aliases

type Person1 = {
  name: string;
  age: number;
};

let person1: Person1 = {
  name: "YT",
  age: 12,
};

let person2: Person1[] = [
  {
    name: "YT-C",
    age: 13,
  },
  { name: "Insta", age: 4 },
];

// functions and types
function add(a: number, b: number) {
  return a + b;
}

// the return type will be number coz it is returning number type in the outupt
const additionOfNum: number = add(4, 8);
console.log("additionOfNum-->", additionOfNum);

// here the return type will be void due to not returning any thing
function printFn(value: any): void {
  console.log("value==> ", value);
}

printFn(673458);

// Generics

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [2, 56, 3];

const updatedArray = insertAtBegining(demoArray, -1); // [-1,2,56,3]
const updatedArrayString = insertAtBegining(["we", "rer", "dgfe"], "d"); // ['d','we','rer','dgfe']

console.log("resultsOfArray", updatedArray);
console.log("resultsOfArrayString", updatedArrayString);
