# Rerendering Issue in React

## 1. Overview

**What is it?**  
Rerendering occurs when a component re-renders unnecessarily, even if no relevant state has changed. Excessive rerenders can degrade performance, especially in large or complex applications.

## 2. Why It Happens

**Common Causes:**

- **State updates in parent components** causing child components to rerender.
- **Passing new references/objects as props** (e.g., arrays or functions) on each render.
- **Improper use of hooks** like `useState` and `useEffect`.

## 3. How It Affects Performance

- Frequent rerenders lead to increased virtual DOM diffing and real DOM updates, which can impact app responsiveness.

## 4. Solutions to Prevent Unnecessary Rerendering

- **Memoization Techniques:**
  - `React.memo`: Memoize functional components to prevent unnecessary rerenders.
  - `useMemo`: Memoize expensive calculations.
- **useCallback Hook:**

  - Avoid unnecessary function recreation on each render by using `useCallback` for event handlers.

- **Avoid Passing Anonymous Functions in JSX:**
  - Creating a new function in JSX causes React to think the function is different on every render.

## 5. Example Code

```jsx
// Without Memoization (Leads to unnecessary rerenders)
const Parent = () => {
  const [state, setState] = useState(false);
  return <Child onClick={() => setState(!state)} />;
};

// With Memoization (Prevents unnecessary rerenders)
const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
});
```
