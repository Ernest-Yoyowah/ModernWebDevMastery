describing how React processes components before rendering them on the screen

Batching
Fiber Architecture
Concurrent Rendering
Memoization
Selective Rendering

so this is me explaining react rendering

rendering is ususally trigerred by chnage in stage -props, state, etc. when reacts dects a chnage in state it calls the render method, this method comes with a series of steps

- calls the react element, this element has some importand properties we need to take note of (type, prop and children), our main focus will be on the type property, react checks for the type and if its a string, it gets the DOM node elements but if its a function then its a component since react components are functions that return jsx, it calls the function and extracts the DOM node elements recursively until it gets all DOM node elements including nested components and etc. react uses the extracted elements to create a new vDOM while keeping a copy of the old vDOM, it compares the two vDOMs to find the difference or chnages, this stage is called diffing and uses an algorithmic design called the diffing algorithm (diffing = difference), after getting the difference react uses it to reconcile the real DOM, this process is also called reconciliation, that that is where the chnaged part are updated on the UI,
