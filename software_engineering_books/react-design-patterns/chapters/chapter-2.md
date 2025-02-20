# React Design Patterns and Best Practices - Summaries

## Chapter 2: Clean Up Your Code

### JSX

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in JavaScript. It simplifies the creation of React elements and improves readability.

### Babel

Babel is a JavaScript compiler that converts modern JavaScript (including JSX) into a format compatible with older browsers.

### Hello, World!

A simple example of rendering a React element:

```jsx
const element = <h1>Hello, World!</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

### DOM Elements and React Components

React differentiates between DOM elements (e.g., `<div>`) and custom React components (e.g., `<MyComponent>`). Components are reusable building blocks that encapsulate behavior and UI.

### Props

Props are immutable inputs passed to components to configure their behavior. They enable reusability and customization.

### Children

The `children` prop allows components to render nested content. It provides flexibility in defining component structures.

### Differences with HTML

React introduces some differences from HTML, such as using `className` instead of `class` and camelCase for inline styles.

### Attributes

React attributes map to DOM properties, ensuring a consistent API for element creation and manipulation.

### Style

Inline styles in React are written as JavaScript objects, enabling dynamic styling.

```jsx
const style = { color: "blue", fontSize: "16px" };
```

### Common Patterns

- **Multi-line JSX**: Improves readability.
- **Multi-properties JSX**: Pass multiple attributes in a clean manner.
- **Conditionals and Loops**: Use JavaScript expressions like `map` and `&&` inside JSX for rendering dynamic content.

### ESLint

ESLint ensures code quality by enforcing best practices and detecting errors. The Airbnb configuration is a popular style guide for React development.

#### Installation

```bash
npm install eslint eslint-plugin-react eslint-config-airbnb --save-dev
```

#### Configuration

Add `.eslintrc.json` with Airbnb's configuration:

```json
{
  "extends": ["airbnb", "plugin:react/recommended"]
}
```

### The Basics of Functional Programming

Functional programming (FP) principles complement React’s declarative style:

- **First-class Objects**: Functions are treated as values and can be passed around.
- **Purity**: Pure functions avoid side effects and make code predictable.
- **Immutability**: Immutable data ensures consistency and reduces bugs.
- **Currying**: Breaking functions into smaller, reusable parts.
- **Composition**: Combining smaller functions into more complex ones.

### FP and User Interfaces

FP principles help create reusable, predictable UI components that are easy to test and debug.

### Summary

This chapter emphasizes cleaning up React code using JSX, Babel, and ESLint while leveraging functional programming principles for maintainability and scalability.
