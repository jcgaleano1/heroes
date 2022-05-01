const express = require('express');
const app = express();

app.set('json spaces', 2)
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//Routes
app.use('/api/heroes', require('./routes/index'));

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`serve at http://localhost:${port}`);
});
