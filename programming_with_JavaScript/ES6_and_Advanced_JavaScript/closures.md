# Closures in JavaScript

## Overview:

Closures are a powerful and often misunderstood concept in JavaScript. They allow functions to retain access to variables from their containing scope, even after the scope has finished executing.

## Key Concepts:

1. **Definition:**

   - A closure in JavaScript refers to the situation involving two functions: an outer function and an inner function, where the inner function has the ability to access variables from the outer function. This occurs due to the concept of nested functions, and closures are powerful for creating private variables and maintaining state.

2. **Lexical Scope:**

   - Closures are based on lexical scope, meaning they capture variables from their lexical environment.

3. **Use Cases:**
   - Practical examples of when and how to use closures.

## Example:

```javascript
// Creating a closure
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunction = outerFunction();

// Invoking the closure
closureFunction(); // Outputs: I am from the outer function
```
