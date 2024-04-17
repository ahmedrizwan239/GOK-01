// Chakra import
import { Box, chakra, Flex, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

// Assets import
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")} bottom="0" w="full" pos={'fixed'}>
      <Flex py={4} w={'80%'} mx={'auto'} alignItems={'center'} justifyContent={'space-between'} flexDir={{base:'column', sm:'row'}} gap={4}>

        {/* Socials */}
        <Flex gap={4}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Flex> 

        {/* Copyrights */}
        <Text>© 2024 Made by Ahmed R.</Text>

      </Flex>
    </Box>
  );
}
