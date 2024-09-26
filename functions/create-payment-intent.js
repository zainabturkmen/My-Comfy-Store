//domain/.netlify/functions/create-payment-intent

require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);


    const calculateOrderAmount = () => {
      
    }

    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
