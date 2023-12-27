# Destructuring in JavaScript (ES6)

## Overview:

Destructuring is a powerful feature in ES6 that allows you to extract values from arrays and objects into distinct variables. It provides a concise way to unpack values.

## Array Destructuring:

1. **Basic Syntax:**

   - Extracting values from an array into individual variables.

2. **Default Values:**
   - Assigning default values when destructuring.

## Object Destructuring:

1. **Basic Syntax:**

   - Extracting values from an object into individual variables.

2. **Alias and Default Values:**
   - Using aliases for variables and setting default values.

## Example:

```javascript
// Array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

// Object destructuring
const person = { name: "John", age: 30 };
const { name, age: personAge = 25 } = person;

// Using destructuring
console.log(a, b, c);
console.log(name, personAge);
```
