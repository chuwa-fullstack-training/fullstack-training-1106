const connect = require('connect');
const serverStatic = require('serve-static');

const app = connect();
app.use(serverStatic('public'));

app.listen(3000, () => console.log('server running on port 3000...'));
