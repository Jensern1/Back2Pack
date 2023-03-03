import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'sources/firebase';
import {
  Text,
  Stack,
  Container,
  Heading,
  HStack,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Checkbox,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { createIcon } from '@chakra-ui/react';

function Auth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isOpen, onToggle } = useDisclosure();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Created user
        const user = userCredential.user;
        console.log(user);
        navigate('/User');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          <Text fontSize='5xl' fontFamily='cursive' align='center'>
            Back2Pack
          </Text>
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading size={{ base: 'xs', md: 'sm' }}>
              Log in to your account
            </Heading>
            <HStack spacing='1' justify='center'>
              <Text color='muted'>Don't have an account?</Text>
              <Button variant='link' colorScheme='blue'>
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          boxShadow='2xl'
          borderRadius={{ base: 'none', sm: 'xl' }}
          bg='#Fcffff'
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      variant='link'
                      aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                      icon={isOpen ? <HiEyeOff /> : <HiEye />}
                      onClick={onToggle}
                    />
                  </InputRightElement>
                  <Input
                    id='password'
                    name='password'
                    type={isOpen ? 'text' : 'password'}
                    autoComplete='current-password'
                    required
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant='link' colorScheme='blue' size='sm'>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Button variant='primary'>Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  OR
                </Text>
                <Divider />
              </HStack>
              <Button width='full'>
                <FcGoogle />
                <Text m={3}>Continue with Google</Text>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Auth;
