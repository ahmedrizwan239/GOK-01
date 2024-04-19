// React imports
import { useContext } from "react";

// Chakra imports
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Link,
  Icon,
} from '@chakra-ui/react';

// Assets import
import { FaMoon, FaRegUser } from 'react-icons/fa';
import { BsCart2 } from "react-icons/bs";
import { HamburgerIcon, CloseIcon, SunIcon } from '@chakra-ui/icons';

// Context import
import { CartContext } from "../context/cart-context"

export default function Header() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getTotalItems } = useContext(CartContext);

  return (
    <>
      <Flex as='nav' borderBottom={1} borderStyle={"solid"} shadow="sm" borderColor={useColorModeValue("gray.100", "gray.900")} bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.600", "white")} >

        <Flex py={4} w={'80%'} mx={'auto'} alignItems={'center'} justifyContent={'space-between'}>
            
          {/* Logo   */}
          <Box>
            <Link fontWeight={'bold'} fontSize={'xl'} href="/">
              GOK
            </Link>
          </Box>

          {/* Dark Mode and Drawer */}
          <Flex alignItems={'center'}>
            <IconButton
            size={'lg'}
            icon={colorMode === "light" ? <FaMoon /> : <SunIcon />}
            aria-label={'Dark Mode'}
            bg="none"
            onClick={toggleColorMode} 
            />
            <Link href="/profile">
              <IconButton
                size="lg"
                icon={<FaRegUser />}
                aria-label="Profile"
                bg="none"
              />
            </Link>
            <Link href="/cart">
              <IconButton
                size={'lg'}
                icon={<BsCart2 />}
                aria-label={'Cart'}
                bg="none"
              />
            </Link>
            ({getTotalItems()})
            <IconButton
              size={'lg'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              bg="none"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}