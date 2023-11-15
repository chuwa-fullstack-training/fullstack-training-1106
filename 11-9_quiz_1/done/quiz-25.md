What is the best way to include a CSS file? 
Why use @import? [CSS]





Answer:





The External Style Sheet (using HTML <link> Tag) is the best method that is used to link the element. Maintaining and re-using the CSS file across different pages is easy and efficient. The <link> tag is placed in the HTML <head> element. To specify a media type=”text/css” for a Cascading Style Sheet <type> attribute which is used to ignore style sheet types that are not supported in a browser.


@import url("my-imported-styles.css");
It is always to be declared at the top of the document. Otherwise, ignored




