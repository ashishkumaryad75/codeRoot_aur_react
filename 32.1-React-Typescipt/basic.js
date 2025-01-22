// Primitives : number, string, boolean
// More Complex type : Array , object
// Function Type , parameters
// Primitives
var age11;
age11 = 12;
var userName;
userName = "Root";
var isInstructor;
isInstructor = true;
// More Complex types
var hobbies;
hobbies = ["Suports", "Cooking"];
// let person: any;
var person;
person = {
    name: "Root",
    age: 23,
};
// // wrong type
// person = {
// isInstructor : false
// }
var people; // storing as in array the above properties.
// Type Interface
var course = "React the complete guide";
// course = 36745;//error due to type
// Type Union
var courses = "React the complete guide";
courses = 36745;
// both types are valid due to type union.
var userNames;
userNames = "Coding-root";
userNames = ["coding", "root"];
var person1 = {
    name: "YT",
    age: 12,
};
var person2 = [
    {
        name: "YT-C",
        age: 13,
    },
    { name: "Insta", age: 4 },
];
// functions and types
function add(a, b) {
    return a + b;
}
// the return type will be number coz it is returning number type in the outupt
var additionOfNum = add(4, 8);
console.log("additionOfNum-->", additionOfNum);
// here the return type will be void due to not returning any thing
function printFn(value) {
    console.log("value==> ", value);
}
printFn(673458);
