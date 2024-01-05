21. What are fragments? Why fragments are better than container divs?




import { Fragments } from "react";

<Fragments>
</Fragments>

return (
  <div>
    <div></div>
    <div></div>
  </div>
)










It's a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. You need to use either or a shorter syntax having empty tag (<></>).

Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
The DOM Inspector is less cluttered.