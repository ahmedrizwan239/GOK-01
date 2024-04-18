// Chakra imports
import {
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button
} from '@chakra-ui/react';

// Assets Import
import { cartIcon } from '@chakra-ui/icons'

function ProductCard({product}) {
  return (
    <Card rounded="lg" shadow="lg" >
        <CardHeader p={0}>
        <Image
          src={product.image}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          w={'full'}
          h={'250px'}
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
        <CardFooter justifyContent={'center'}>
            <Button colorScheme='teal' w={'full'}>Add to cart</Button>
        </CardFooter>
    </Card>
  );
}

export default ProductCard;