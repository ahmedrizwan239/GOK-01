/* eslint-disable */

// React imports
import React, { useEffect, useState, useContext } from "react";

// Chakra imports
import {
  Flex,
  Heading,
} from "@chakra-ui/react";

// Custom components
import Layout from '../../layout'
import CheckoutForm from "../../components/checkoutForm";

// Context import
import { CartContext } from "../../context/cart-context"

// Stripe Import
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function Checkout() {
 
  // State variables
  const [clientSecret, setClientSecret] = useState("");
  const { cartItems, getCartTotal } = useContext(CartContext);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  
  // Function to fetch client secret
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            items: cartItems,
            amount: getCartTotal() * 100,
         }),
      });
      // Now you have the client secret, you can use it as needed
      const { clientSecret } = await response.json();
      // Set the client secret received from the server
      setClientSecret(clientSecret); 
    } catch (error) {
      console.error("Error fetching PaymentIntent client secret:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <Layout>

      {/* ------- Featured Products --------- */}
      <Flex w="80%" mx="auto" mt={16} mb={16} gap={6} flexDir="column">
        <Heading as='h4' size='md'>
          Checkout
        </Heading>

        {clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm />
            </Elements>
        )}
        
      </Flex>

    </Layout>
  );
}

export default Checkout;
