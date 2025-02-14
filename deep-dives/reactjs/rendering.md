# Understanding React Rendering

## **1. Transpilation (JSX → JavaScript)**

Before React even starts rendering, JSX must be **transpiled** by **Babel** because browsers do not understand JSX. JSX is an **extension of JavaScript** that allows us to write markup within JavaScript. It is often called **syntactic sugar** for `React.createElement()`.

Once this conversion happens, React takes over the rendering process.

---

## **2. What Triggers React Rendering?**

React re-renders a component when:  
✅ The **component mounts (first render)**.  
✅ The **state changes** (e.g., `useState`, `useReducer`).  
✅ The **props change**.  
✅ The **context changes** (if using `useContext`).  
✅ A **parent component re-renders**, causing a child component to update.

---

## **3. React Rendering Process**

Once React detects that a component needs to render, it follows these steps:

### **Step 1: React Element Processing**

- React calls the **React element**. This element has three important properties:
  - `type` → Determines whether it's an HTML tag (`div`, `p`) or a component (`MyComponent`).
  - `props` → Contains attributes and children elements.
  - `children` → Nested elements inside the component.

### **Step 2: Checking the Type Property**

- If `type` is a **string**, React directly creates a **DOM node**.
- If `type` is a **function**, React recognizes it as a **component**, calls the function, and extracts its elements **recursively**.

### **Step 3: Virtual DOM Creation**

React uses the extracted elements to create a **new Virtual DOM (vDOM)** while keeping a **copy of the old vDOM**.

### **Step 4: Diffing Algorithm**

React **compares** the new vDOM with the old vDOM and finds the differences. This process is called **diffing**.

### **Step 5: Reconciliation (Updating the Real DOM)**

React applies the **calculated changes** from the diffing step to the **real DOM**. This process is called **reconciliation**.

---

## **4. Summary of the React Rendering Flow**

1. **Transpilation**: JSX is converted into JavaScript that the browser understands.
2. **React calls the component function** if it's a function component.
3. **Extracts all DOM node elements** recursively.
4. **Creates a new Virtual DOM**.
5. **Compares it with the previous Virtual DOM (diffing algorithm)**.
6. **Updates only the changed parts** in the real DOM (reconciliation).

**This process ensures React updates the UI efficiently while minimizing direct manipulation of the real DOM.**

NOTE:

describing how React processes components before rendering them on the screen

Batching
Fiber Architecture
Concurrent Rendering
Memoization
Selective Rendering

so this is me explaining react rendering

rendering is ususally trigerred by chnage in stage -props, state, etc. when reacts dects a chnage in state it calls the render method, this method comes with a series of steps

- calls the react element, this element has some importand properties we need to take note of (type, prop and children), our main focus will be on the type property, react checks for the type and if its a string, it gets the DOM node elements but if its a function then its a component since react components are functions that return jsx, it calls the function and extracts the DOM node elements recursively until it gets all DOM node elements including nested components and etc. react uses the extracted elements to create a new vDOM while keeping a copy of the old vDOM, it compares the two vDOMs to find the difference or chnages, this stage is called diffing and uses an algorithmic design called the diffing algorithm (diffing = difference), after getting the difference react uses it to reconcile the real DOM, this process is also called reconciliation, that that is where the chnaged part are updated on the UI,
