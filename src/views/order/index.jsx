/* eslint-disable */

// React imports
import React, { useEffect, useState, useContext } from "react";

// Chakra imports
import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

// Custom components
import Layout from '../../layout'

// Assets Import

function Success() {

  return (
    <Layout>

      {/* ------- Success Page --------- */}
      <Flex w="80%" mx="auto" mt={16} mb={16} gap={6} flexDir="column">
        <Heading as='h4' size='md'>
          Order Confirmed
        </Heading>

        <Text>Payment Succesful 🎉, Thankyou for placing an order!</Text>
      </Flex>

    </Layout>
  );
}

export default Success;
