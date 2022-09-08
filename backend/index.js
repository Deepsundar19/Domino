const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registration = require('./routes/registrationRoutes');
const pizzaMania = require('./routes/pizzaManiaRoutes');
const orderPizza = require('./routes/orderPizzaRoutes');


const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.use('/registration', registration);
app.use('/pizzaMania', pizzaMania);
app.use('/orderPizza', orderPizza);




app.listen(port, () => {
  console.log(`Domino's app listening at http://localhost:${port}`)
})