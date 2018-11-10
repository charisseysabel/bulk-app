const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('hello from express!'));

app.listen(port, () => console.log(`App is listening to port ${port}`));
