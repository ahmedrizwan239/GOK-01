/* eslint-disable */

// React imports
import React, { useEffect, useState, useContext } from "react";

// Chakra imports
import {
  Flex,
  Heading,
  SimpleGrid,
  useToast
} from "@chakra-ui/react";

// Custom components
import Layout from '../../layout'
import ProductCard from "../../components/productCard";

// Context import
import { CartContext } from "../../context/cart-context"

// Assets Import

function Home() {
 
  // State variables
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const toast = useToast();
  const { addToCart } = useContext(CartContext);
  
  // Function to fetch products
  async function fetchPrducts()
  {
    setIsFetching(true);
    try {
      const data = await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json());
      setProducts(data);
    } 
    catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  // Function to fetch products
  async function handleAdd(product)
  {
    addToCart(product);
    toast({
      title: "Product added!",
      description: `Added to cart successfully`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }


  useEffect(()=>{
    fetchPrducts();
  }, []);

  return (
    <Layout>

      {/* ------- Featured Products --------- */}
      <Flex w="80%" mx="auto" mt={16} mb={16} gap={6} flexDir="column">
        <Heading as='h4' size='md'>
          Featured Collection
        </Heading>

        <SimpleGrid columns={4} gap={8}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} onAdd={() => handleAdd(product)} />
        ))}
        </SimpleGrid>
      </Flex>

    </Layout>
  );
}

export default Home;
