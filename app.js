const express = require('express');
const route = require('./src/router');
const cors = require('cors')
const port = 3000;


const app = express();
app.use(cors())

app.use(route)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});