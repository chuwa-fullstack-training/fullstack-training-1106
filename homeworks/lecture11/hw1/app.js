const express = require('express');
const app = express();
const configRoutes = require('./routers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configRoutes(app);

app.listen(3000, () => {
    console.log('Our server is listening on http://localhost:3000');
})