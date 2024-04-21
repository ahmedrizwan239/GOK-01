/* eslint-disable */

// React imports
import React, { useState, useContext } from "react";

// Chakra imports
import {
  Button,
  Flex,
} from "@chakra-ui/react";

// Context import
import { CartContext } from "../context/cart-context"

// Stripe Import
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

function CheckoutForm() {

    // State variables
    const [isProcessing, setIsProcessing] = useState(false);
    const { clearCart } = useContext(CartContext);
    const stripe = useStripe();
    const elements = useElements();
    const successUrl = `${window.location.protocol}//${window.location.host}/success`;
  
    // Function to confirm payment
    const handleSubmit = async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }

      setIsProcessing(true);
  
      try {
        const result = await stripe.confirmPayment({
          elements,
          confirmParams: {
              return_url: successUrl
          },
        });
    
        if (result.error) {
          console.error(result.error.message);
        } else {
          // Payment was successful, clear the cart
          clearCart();
          console.log("Payment successful!");
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
        // Handle unexpected error scenario
      }
      setIsProcessing(false);
      
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <Flex flexDir={'column'} w={{md:'50%'}} mx={'auto'} gap={4}>
                <PaymentElement />
                <Button isDisabled={isProcessing || !stripe || !elements} isLoading={isProcessing} type="submit" colorScheme="teal" w={{base: 'full', lg:'50%'}} mx={'auto'}>Pay Now</Button>
            </Flex>
        </form>
    );
}

export default CheckoutForm;
