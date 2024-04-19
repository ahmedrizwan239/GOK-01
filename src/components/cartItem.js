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

function cartItem({item, onDelete}) {
  return (
    <Card rounded="lg" shadow="lg" >
        <CardHeader p={0}>
        <Image
          src={item.image}
          alt={`Picture of ${item.title}`}
          roundedTop="lg"
          w={'full'}
          h={'250px'}
        />
        </CardHeader>
        <CardBody>
            <Text fontSize="md" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={2}>
              {item.title}
            </Text>
            <Text fontSize="md" fontWeight="semibold" as="h4" lineHeight="tight" pt={4}>
              ${item.price}
            </Text>
        </CardBody>
        <CardFooter justifyContent={'center'}>
            <Button colorScheme='red' w={'full'} onClick={onDelete}>Remove</Button>
        </CardFooter>
    </Card>
  );
}

export default cartItem