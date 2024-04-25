/* eslint-disable */

// React imports
import React, { useEffect, useState, useContext } from "react";

// Google Auth imports
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';

// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Formik imports
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

// Custom components
import { HSeparator } from "../../components/separator/Separator";
import InputField from "../../components/InputField"
import PasswordField from "../../components/PasswordField"

// Assets Import
import { FcGoogle } from "react-icons/fc";

// Context import
import { UserContext } from "../../context/user-context"


function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const googleBg = useColorModeValue("gray.200", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );

  // Validation Schema
  const validationSchema = Yup.object().shape({
     username: Yup.string().required('Email is required'),
     password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    username: '',
    password: '' 
  }

  // State variables
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo, saveUser, logoutUser } = useContext(UserContext);
  const [profile, setProfile] = useState(userInfo);

  // Login function
  const LoginGoogle = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  // Logout function
  const logOut = () => {
      googleLogout();
      setProfile(null);
      logoutUser();
  };

  // Function to fetch user profile
  async function fetchProfile()
  {
    if (user) {
      try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        setProfile(data);
        saveUser(data);
      } 
      catch (error) {
        console.error('Error fetching profile:', error);
      }
    }
  }

  // Function to login user via auth API
  async function Login(values)
  {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      setProfile(data);
      saveUser(data);
    } 
    catch (error) {
      console.error('Error fetching profile:', error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return (
    <Flex w={'full'} justifyContent='center'>
    {!profile ? 
      (<Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "40px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "40px" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Sign In
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <Button
            fontSize='sm'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            fontWeight='500'
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
            onClick={LoginGoogle}>
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
            Sign in with Google
          </Button>
          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color='gray.400' mx='14px'>
              or
            </Text>
            <HSeparator />
          </Flex>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
              Login(values);
            }}
          >
          {({ errors, touched, values }) => (
            <Form>
              <InputField fieldName={'username'} label='Username' placeholder="Enter username" type='text' extra={'*'} size='lg' bg={googleBg} fontSize='sm' variant='auth' form />
              <PasswordField fieldName={'password'} label='Password' placeholder="Min. 8 characters" extra={'*'} size='lg' bg={googleBg} fontSize='sm' variant='auth' form />
              
              <Flex justifyContent='space-between' align='center' mb='24px'>
                <Flex>
                  <Checkbox
                    id='remember-login'
                    me='10px'
                  />
                  <FormLabel
                    htmlFor='remember-login'
                    mb='0'
                    fontWeight='normal'
                    color={textColor}
                    fontSize='sm'>
                    Keep me logged in
                  </FormLabel>
                </Flex>
                <Text
                  color={textColorBrand}
                  fontSize='sm'
                  fontWeight='500'>
                  Forgot password?
                </Text>
              </Flex>
              <Button
                fontSize='sm'
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                bg={'#7551ff'}
                color={'white'}
                _hover={{bg: '#7551ff'}}
                type="submit"
                isLoading={isLoading}
                >
                Sign In
              </Button>
            </Form>
            )}
          </Formik>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
            <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
              Not registered yet?
              {/* <NavLink to='/auth/sign-up'> */}
                <Text
                  color={textColorBrand}
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Create an Account
                </Text>
              {/* </NavLink> */}
            </Text>
          </Flex>
        </Flex>
      </Flex>)
      :
      (
        <Flex
          maxW={{ base: "100%", md: "max-content" }}
          w='100%'
          mx={{ base: "auto", lg: "0px" }}
          me='auto'
          h='100%'
          alignItems='start'
          justifyContent='center'
          mb={{ base: "30px", md: "40px" }}
          px={{ base: "25px", md: "0px" }}
          mt={{ base: "40px", md: "40px" }}
          flexDirection='column'>
          <Box me='auto'>
            <Heading color={textColor} fontSize='36px' mb='10px'>
              User Profile
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColorSecondary}
              fontWeight='400'
              fontSize='md'>
              Welcome to GOK-01!
            </Text>
          </Box>
          <Flex
            zIndex='2'
            direction='column'
            w={{ base: "100%", md: "420px" }}
            maxW='100%'
            background='transparent'
            borderRadius='15px'
            mx={{ base: "auto", lg: "unset" }}
            me='auto'
            mb={{ base: "20px", md: "auto" }}>
            <Avatar src={profile.picture || profile.image} size={'lg'} name={profile.name} mb={8} alignSelf={'center'} />
            <Flex align='center' mb='25px'>
              <HSeparator />
            </Flex>
            
            <InputField fieldName={'name'} label='Name' placeholder="Enter name" type='text' size='lg' bg={googleBg} fontSize='sm' variant='auth' defaultValue={profile.name || profile.firstName + ' ' + profile.lastName} readOnly />
            <InputField fieldName={'email'} label='Email' placeholder="Enter email" type='text' size='lg' bg={googleBg} fontSize='sm' variant='auth' defaultValue={profile.email} readOnly />
            
            <Button
              fontSize='sm'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'
              bg={'#7551ff'}
              color={'white'}
              _hover={{bg: '#7551ff'}}
              onClick={logOut}>
              Sign Out
            </Button>

          </Flex>
        </Flex>
      )
    }
    </Flex>
  );
}

export default SignIn;
