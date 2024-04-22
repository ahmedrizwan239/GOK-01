/* eslint-disable */

// React imports
import React, { useEffect, useState, useContext } from "react";

// Chakra imports
import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Link
} from "@chakra-ui/react";

// Custom components
import Layout from '../../layout'
import CartItem from "../../components/cartItem";

// Context import
import { CartContext } from "../../context/cart-context"

// Assets Import

function Cart() {
 
  // State variables
  const { cartItems, getCartTotal, removeFromCart } = useContext(CartContext);
  
  useEffect(()=>{
  }, []);

  return (
    <Layout>

      {/* ------- Cart Items --------- */}
      <Flex w="80%" mx="auto" mt={16} mb={16} gap={6} flexDir="column">
        <Heading as='h4' size='md'>
          Your Cart
        </Heading>

        {cartItems.length > 0 ? 
          (<SimpleGrid columns={{base: 1, sm: 2, md: 3, lg: 4}} gap={8}>
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} onDelete= {() => removeFromCart(item)}/>
          ))}
          </SimpleGrid>)
          :
          (
            <Text>No items found in your cart</Text>)
        } 

        {cartItems.length > 0 &&
        <Flex mb={8} w={'full'} flexDir={'column'} justifyContent={'center'}>
          <Text py={4} mx={'auto'}>Your total amount is : ${getCartTotal()}</Text>
          <Link href='/checkout' mx={'auto'} w={{base:'full', sm:'60%', lg:'30%'}}><Button colorScheme="teal" w={'full'}>Checkout</Button></Link>
        </Flex>
        }

      </Flex>

    </Layout>
  );
}

export default Cart;
