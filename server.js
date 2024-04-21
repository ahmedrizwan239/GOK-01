const express = require('express')
const cors = require('cors');
let dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create-payment-intent', async (req, res) => {
    const { items, amount } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})