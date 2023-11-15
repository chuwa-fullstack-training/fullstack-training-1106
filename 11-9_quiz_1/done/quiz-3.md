What is specificity, and how does it affect CSS selectors? Please order the selector weight categories. [CSS]
follow up: What happens when two selectors have the same specificity score?



Answer:

1. Specificity is an algorithm that determines the importance and weight of CSS selectors based on their matching strength. A higher specificity value causes a style rule to be applied even if other conflicting rules are present later in the stylesheet, enabling better control over the appearance of HTML elements.
2. ID (`#id`) > CLASS (`.class`) > TYPE (`p`, `div`, `::before`, `::placeholder`, etc) > No value (`*`)

follow up: When two selectors have the same specificity score, the newest or last instance in the source order wins.