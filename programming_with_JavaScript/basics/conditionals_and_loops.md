# Conditionals and Loops in JavaScript

## Overview:

Conditionals and loops are fundamental structures in programming that enable the execution of different blocks of code based on conditions or the repetition of code.

## Conditionals:

1. **If Statement:**

   - Executing a block of code if a specified condition is true.

2. **Else Statement:**

   - Executing an alternative block of code if the condition in the if statement is false.

3. **Else If Statement:**
   - Adding multiple conditions using else if.

## Loops:

1. **For Loop:**

   - Repeating a block of code a specific number of times.

2. **While Loop:**

   - Repeating a block of code while a specified condition is true.

3. **Do-While Loop:**
   - Similar to the while loop but guarantees the execution of the block of code at least once.

## Example:

```javascript
// If statement
let num = 10;
if (num > 0) {
  console.log("Number is positive");
} else if (num === 0) {
  console.log("Number is zero");
} else {
  console.log("Number is negative");
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}
```
