# Functions in JavaScript

## Overview:

Functions in JavaScript allow you to encapsulate a block of code and execute it whenever needed. They promote code reusability and modularity.

## Function Declaration:

1. **Defining a Function:**

   - Using the `function` keyword to declare a function.

2. **Function Parameters:**

   - Passing parameters to functions for dynamic behavior.

3. **Return Statement:**
   - Returning values from functions.

## Function Expressions:

1. **Anonymous Functions:**

   - Defining functions without a name.

2. **Arrow Functions:**
   - A concise way to write functions introduced in ECMAScript 6.

## Scope of Variables:

1. **Local Scope:**

   - Variables defined within a function.

2. **Global Scope:**
   - Variables defined outside any function, accessible throughout the program.

## Example:

```javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression (Arrow function)
const add = (a, b) => a + b;

// Using functions
console.log(greet("John"));
console.log(add(5, 3));
```
