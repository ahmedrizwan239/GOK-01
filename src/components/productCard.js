// Chakra imports
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Button
} from '@chakra-ui/react';

// Assets Import
import { cartIcon } from '@chakra-ui/icons'

function ProductCard({product}) {
  return (
    // <Flex>
    //   <Box
    //     bg={useColorModeValue('white', 'gray.800')}
    //     borderWidth="1px"
    //     rounded="lg"
    //     shadow="lg"
    //     w={'full'}
    //     >

    //     <Image
    //       src={product.image}
    //       alt={`Picture of ${product.title}`}
    //       roundedTop="lg"
    //       w={'full'}
    //       h={'250px'}
    //     />

    //       <Flex p={4} flexDir={'column'} justifyContent="space-between" alignContent="center" fontSize="md" color={useColorModeValue('gray.800', 'white')}>
    //         <Box
    //           fontSize="md"
    //           fontWeight="semibold"
    //           as="h4"
    //           lineHeight="tight"
    //           >
    //           {product.title}
    //         </Box>
    //         <Box>
    //             ${product.price}
    //         </Box>
    //       </Flex>
    //   </Box>
    // </Flex>
    <Card align='center' rounded="lg" shadow="lg" >
        <CardHeader>
        <Image
          src={product.image}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          w={'full'}
          h={'180px'}
        />
        </CardHeader>
        <CardBody>
            <Text fontSize="md" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={2}>
              {product.title}
            </Text>
            <Text fontSize="md" fontWeight="semibold" as="h4" lineHeight="tight" pt={4}>
              ${product.price}
            </Text>
        </CardBody>
        <CardFooter>
            <Button colorScheme='teal'>Add to cart</Button>
        </CardFooter>
    </Card>
  );
}

export default ProductCard;