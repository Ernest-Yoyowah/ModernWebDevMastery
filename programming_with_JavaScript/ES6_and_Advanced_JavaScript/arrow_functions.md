# Arrow Functions in JavaScript (ES6)

## Overview:

Arrow functions are a concise and modern way to write functions in JavaScript introduced in ECMAScript 6 (ES6). They provide a shorter syntax and handle the `this` keyword differently compared to traditional function expressions.

## Key Features:

1. **Syntax:**

   - Shorter syntax using the arrow (`=>`) notation.

2. **No Binding of `this`:**

   - Arrow functions do not bind their own `this` value, making them suitable for certain use cases.

3. **Implicit Return:**
   - If the function body consists of a single expression, it is implicitly returned.

## Example:

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Using arrow functions
console.log(add(3, 5));
console.log(multiply(2, 4));
```
