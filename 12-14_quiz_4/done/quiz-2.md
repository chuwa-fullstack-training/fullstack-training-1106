2. When to use a Class Component over a Function Component?
























After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too.

But even there are two reasons to use Class components over Function components.

If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.
In older versions, If the component needs state or lifecycle methods then you need to use class component.