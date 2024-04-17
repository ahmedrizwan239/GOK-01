// Chakra imports
import {
  Box,
  Button,
  Container,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  Stack,
  Text,
} from '@chakra-ui/react';

// Assets import
import { FaMoon } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon, SunIcon } from '@chakra-ui/icons';

export default function Header() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex as='nav' borderBottom={1} borderStyle={"solid"} shadow="sm" borderColor={useColorModeValue("gray.100", "gray.900")} bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.600", "white")} >

        <Flex py={4} w={'80%'} mx={'auto'} alignItems={'center'} justifyContent={'space-between'}>
            
          {/* Logo   */}
          <Box>
              GOK
          </Box>

          {/* Dark Mode and Drawer */}
          <Flex gap={2}>
            <Button onClick={toggleColorMode} bg="none">
              {colorMode === "light" ? <FaMoon /> : <SunIcon />}
            </Button>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}