20. Why React uses className over class attribute?






JSX
<div className="header"></div>

HTML
<div class="header"></div>











The attribute class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the className prop.