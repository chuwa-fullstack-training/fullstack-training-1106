/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Node.js tutorial</title>
  <script>
    function handleSubmit() {
      const input1Value = document.getElementById('input1').value;
      const input2Value = document.getElementById('input2').value;

      fetch('/api/home', {
        method: 'POST',
        body: JSON.stringify({
            'input1': input1Value,
            'input2': input2Value,
        }),
      })
      .then(response => response.json())
      .then(data => {
        let [title, content] = [data.input1, data.input2];
        document.getElementById('submittedData').innerText = \`title=\${title}&content=\${content}\`;
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    }
  </script>
</head>
<body>
  <h1>Welcome to Node.js tutorial</h1>
  <form onsubmit="event.preventDefault(); handleSubmit();">
    <!-- <label for="input1">Input 1:</label> -->
    <input type="text" id="input1" name="input1">

    <!-- <label for="input2">Input 2:</label> -->
    <input type="text" id="input2" name="input2">

    <button type="submit">Submit</button>
  </form>

  <!-- Display submitted data -->
  <div id="submittedData"></div>

</body>
</html>
`;

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/home.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlContent);
    } else if (req.method === 'POST' && req.url === '/api/home') {
      let body = '';
  
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
  
      req.on('end', () => {
        const formData = JSON.parse(body);
        const responseData = {
            input1: formData.input1,
            input2: formData.input2,
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseData));
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
  
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });