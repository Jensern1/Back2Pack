import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'sources/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
import { UserContext } from 'contexts/UserContext.js';

function Auth() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setrPassword] = useState('');
  const seePassword = useDisclosure();
  const loginMode = useDisclosure();

  const [errormsg, setError] = useState('');

  const { setUser, name } = useContext(UserContext);

  const onGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = userCredential.user;
        console.log(user);
        setUser(user.uid, user.displayName, user.email, user.accessToken);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError('* ' + errorMessage);
      });
  };

  const onSubmit = async () => {
    if (!password || !rpassword || !email) {
      setError('* All fields are mandatory!');
    } else if (password === rpassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Created user
          const user = userCredential.user;
          setUser(user.uid, user.displayName, user.email, user.accessToken);
          console.log('User: ' + name + ' logged in!');
          console.log("I onSubmit er UserID = " + user.uid);
          navigate('/User');
          // ...
        })
        .then((userCredential) => {
          userCredential.user.updateProfile({
            displayName: 'test',
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError('* ' + errorMessage);
        });
    } else {
      setError("* Password's did not match!");
    }
  };

  const onLogin = () => {
    if (!password || !email) {
      setError('* All fields are mandatory!');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user.uid, user.displayName, user.email, user.accessToken);
          console.log('User: ' + name + ' logged in!');
          navigate('/');
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError('* ' + errorMessage);
        });
    }
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
              {loginMode.isOpen
                ? 'Log in to your account'
                : 'Register for Back2Pack'}
            </Heading>
            <HStack spacing='1' justify='center'>
              <Text color='muted'>
                {loginMode.isOpen
                  ? "Don't have an account?"
                  : 'Already have an account?'}
              </Text>
              <Button
                variant='link'
                colorScheme='blue'
                onClick={loginMode.onToggle}
              >
                {loginMode.isOpen ? 'Sign up' : 'Login'}
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
                <Input
                  id='email'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      variant='link'
                      aria-label={
                        seePassword.isOpen ? 'Mask password' : 'Reveal password'
                      }
                      icon={seePassword.isOpen ? <HiEyeOff /> : <HiEye />}
                      onClick={seePassword.onToggle}
                    />
                  </InputRightElement>
                  <Input
                    id='password'
                    name='password'
                    type={seePassword.isOpen ? 'text' : 'password'}
                    autoComplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>
              {loginMode.isOpen ? (
                <></>
              ) : (
                <FormControl>
                  <FormLabel htmlFor='repeat password'>
                    Repeat password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id='rpassword'
                      name='rpassword'
                      type={seePassword.isOpen ? 'text' : 'password'}
                      onChange={(e) => setrPassword(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormControl>
              )}
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultChecked>Remember me</Checkbox>
            </HStack>
            <Text color='red'>{errormsg}</Text>
            <Stack spacing='6'>
              {loginMode.isOpen ? (
                <Button onClick={() => onLogin()} variant='primary'>
                  Login
                </Button>
              ) : (
                <Button onClick={() => onSubmit()} variant='primary'>
                  Sign up
                </Button>
              )}
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  OR
                </Text>
                <Divider />
              </HStack>
              <Button width='full' onClick={() => onGoogle()}>
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
