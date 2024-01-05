11. explain the following code:

script.js:
document.addEventListener("DOMContentLoaded", function(event) {
    var items = document.querySelectorAll(' .item');
    for (var i = 0; 1 < items.length; i++) {
      var element = items[i];
      element.addEventListener('click', function() {
      console.log('You clicked on button # + i);
    });
});

index.html:
<!doctype html>
<html lang=en>
<head>
  <meta charset=utf-8>
  <title>Test</title>
  <script sro="script.is"></script>
</head>
<body>
  <button class="item">A</button>
  <button class="item">B</button>
  <button class="item">C</button>
  <button class="item">D</button>
  <button class="item">E</button>
</body>
</html>

What happens when you click on the 3rd item?