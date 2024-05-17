// let and const are different ways of creating variables
// let is used when the value will change in the future
// const is used when it will never chnage. its a constant value

// Example

// let - if the value might change
let myName = "Ernest";
console.log(myName); // output: Ernest

myName = "Yoyowah";
console.log(myName); // output: Yoyowah

// const - if the value will never change
const my_name = "Mickey";
console.log(my_name); // output: Mickey

my_name = "Nii";
console.log(my_name); // output: TypeError: Assignment to constant variable.
