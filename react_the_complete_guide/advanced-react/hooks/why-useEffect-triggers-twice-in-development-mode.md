# Why `useEffect` Triggers Twice in Development Mode

## Key Concept: React Strict Mode

- **Strict Mode** is a development-only feature in React that helps identify potential problems in an application.
- When enabled, React intentionally double-invokes certain lifecycle methods, including `useEffect`, to detect side effects in components.
- This **does not happen in production** builds. In production, `useEffect` will only trigger once per render as expected.

## Reason for `useEffect` Triggering Twice in Development Mode

- React will call the `useEffect` cleanup function and then re-run the effect to ensure that it correctly handles side effects and cleans up resources when components unmount or update.
- The goal is to encourage developers to handle side effects properly by ensuring that cleanup happens before every re-run.

### Example:

- If your `useEffect` has dependencies that change frequently or your effect does not clean up properly, this behavior will help uncover potential bugs that could affect performance or cause memory leaks.

---

### Key Takeaways

- **Strict Mode** is only for development to help catch side effects.
- **`useEffect` triggers twice** to test for and handle cleanup properly.
- This is **not a bug**; it's a feature to help you write better, more predictable React code.

---

### Action Points:

1. **Understand** the behavior of Strict Mode and its role in development.
2. **Test side effects** in components using `useEffect` and ensure proper cleanup.
3. **Avoid reliance on `useEffect` running only once** in development mode.
