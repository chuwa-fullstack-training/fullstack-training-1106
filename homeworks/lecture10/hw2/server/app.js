const express = require('express');
const app = express();
const configRoutes = require('./routers');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

configRoutes(app);

app.listen(4000, () => {
    console.log('Our server is listening on http://localhost:4000');
})