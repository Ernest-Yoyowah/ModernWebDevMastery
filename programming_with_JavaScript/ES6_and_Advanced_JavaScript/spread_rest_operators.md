# Spread and Rest Operators in JavaScript (ES6)

## Spread Operator:

1. **Array Spreading:**

   - Spreading the elements of an array into another array.

2. **Object Spreading:**
   - Spreading the properties of an object into another object.

## Rest Operator:

1. **Gathering Remaining Elements (Array):**

   - Gathering remaining elements into an array.

2. **Gathering Remaining Properties (Object):**
   - Gathering remaining properties into an object.

## Example:

```javascript
// Spread operator (Array)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Spread operator (Object)
const obj1 = { name: "John" };
const obj2 = { ...obj1, age: 30 };

// Rest operator (Array)
const [first, ...rest] = [1, 2, 3, 4, 5];

// Rest operator (Object)
const { title, ...restProperties } = { title: "Sample", description: "..." };

// Using spread and rest operators
console.log(arr2);
console.log(obj2);
console.log(rest);
console.log(restProperties);
```
