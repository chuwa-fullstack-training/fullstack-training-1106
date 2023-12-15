```html
<h2>What is Frontend?</h2>
<ul>
  <li>
    Frontend is the part of the website that users can see and interact with.
  </li>
  <li>Frontend is also called <strong>client-side</strong>.</li>
  <li>Frontend is built with HTML, CSS, and JavaScript.</li>
</ul>
```

Turn the HTML above into React components and display

https://codesandbox.io/p/sandbox/hw12-1-lnfgcf

export default function App() {
  return (
    <div className="App">
      <h2>What is Frontend?</h2>
      <ul>
        <li>
          Frontend is the part of the website that users can see and interact
          with.
        </li>
        <li>
          Frontend is also called <strong>client-side</strong>.
        </li>
        <li>Frontend is built with HTML, CSS, and JavaScript.</li>
      </ul>
    </div>
  );
}