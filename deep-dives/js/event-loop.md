# JavaScript Runtime and Queues

## JavaScript Runtime vs. JavaScript Engine

- **JavaScript Engine**:

  - The JavaScript Engine (e.g., V8 for Chrome, SpiderMonkey for Firefox) is responsible for **parsing, compiling, and executing** JavaScript code.
  - It processes the code, optimizes it, and converts it into machine-readable instructions for execution.

- **JavaScript Runtime**:
  - The JavaScript runtime environment is a broader system that includes:
    1. The **JavaScript Engine**
    2. **Web APIs** or **Node.js APIs** (e.g., `setTimeout`, DOM manipulation, `fetch`).
    3. The **Event Loop** and **Queues** (Callback Queue, Microtask Queue, etc.).
  - In simple terms, the **engine** is **part of the runtime**, but the runtime includes additional components that enable JavaScript to interact with the browser or Node.js environment.

### Summary:

- The **JavaScript engine** executes the code.
- The **JavaScript runtime** provides the necessary tools (like APIs and event queues) to run JavaScript in a browser or server environment.

---

## Task Queue, Microtask Queue, and Callback Queue

JavaScript handles asynchronous operations using the **Event Loop** and different types of queues:

### Queues Overview:

1. **Task Queue (Callback Queue):**

   - Contains tasks from:
     - `setTimeout` and `setInterval` callbacks
     - I/O operations (e.g., network requests)
     - User interactions (e.g., `click` events)
   - Tasks in the **Task Queue** are executed **after all microtasks** and when the **call stack** is empty.

2. **Microtask Queue:**
   - Contains higher-priority tasks called **microtasks**.
   - Microtasks include:
     - **Promise** callbacks (`.then`, `.catch`, `.finally`)
     - `MutationObserver` callbacks
   - Microtasks are executed **immediately after the call stack is empty** and before tasks in the Task Queue.

### Relationship Between Queues:

- **Microtask Queue** and **Task Queue** are **separate queues**.
- Tasks in the **Microtask Queue** are always executed **before** tasks in the **Task Queue**.
- The **Callback Queue** is often used as a general term to refer to the Task Queue.

---

## Microtask Queue and Promises

### Promises and Microtasks:

- Promises (`.then`, `.catch`, `.finally`) are microtasks.
- When a promise resolves, its callback is added to the **Microtask Queue**.
- Since microtasks have a higher priority, **Promise callbacks execute before tasks in the Task Queue**.

### Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Task Queue");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask Queue");
});

console.log("End");
```

### Execution Order:

1. **Call Stack**:
   - Logs `"Start"`
   - Logs `"End"`
2. **Microtask Queue**:
   - Processes `Promise.resolve().then` callback (`"Microtask Queue"`)
3. **Task Queue**:
   - Processes `setTimeout` callback (`"Task Queue"`)

### Output:

```
Start
End
Microtask Queue
Task Queue
```

---

## Summary of Key Points:

1. The **JavaScript Engine** is part of the **JavaScript Runtime**.
2. The **Microtask Queue** has a higher priority than the **Task Queue**.
3. Microtasks (e.g., Promise callbacks) are executed **before** tasks in the Task Queue.
4. The Event Loop ensures that the Call Stack, Microtask Queue, and Task Queue are processed in the correct order:
   - Call Stack
   - Microtask Queue
   - Task Queue

---
