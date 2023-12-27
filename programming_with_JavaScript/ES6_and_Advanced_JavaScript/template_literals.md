# Template Literals in JavaScript (ES6)

## Overview:

Template literals are a convenient way to create strings in JavaScript. They support multiline strings, string interpolation, and embedded expressions.

## Basic Syntax:

1. **Backticks (\`):**

   - Enclosing template literals with backticks.

2. **String Interpolation:**

   - Embedding expressions within template literals.

3. **Multiline Strings:**
   - Creating multiline strings without escape characters.

## Example:

```javascript
// Basic template literal
const greeting = `Hello, World!`;

// String interpolation
const name = "John";
const message = `Welcome, ${name}!`;

// Multiline string
const multiline = `
  This is a multiline string.
  It spans across multiple lines.
`;

// Using template literals
console.log(greeting);
console.log(message);
console.log(multiline);
```
