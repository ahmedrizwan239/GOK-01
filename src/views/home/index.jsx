/* eslint-disable */

// React imports
import React, { useEffect, useState } from "react";

// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Layout from '../../layout'

// Assets Import

function Home() {
 
  // State variables
 
  return (
    <Layout>
      <Flex w={'full'} h={'90vh'} alignItems={'center'} justifyContent={'center'}>
        <Button>
          <Link href="/profile" _hover={{textDecoration:'none'}}>Go to profile</Link>
        </Button>
      </Flex>
    </Layout>
  );
}

export default Home;
