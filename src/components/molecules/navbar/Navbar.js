import React from 'react';
import { Box, Flex, Button, Image, Text } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <Box className={styles.navbar}>
      <Flex alignItems="center" flex="1">
      <Box>
        <Text fontSize="2xl" fontFamily="cursive">BackToPack</Text>
      </Box>
        <Button variant="ghost" leftIcon={<AiOutlineHome />} size="sm" mr={2}>
          Home
        </Button>
        <Button variant="ghost" leftIcon={<AiOutlineUser />} size="sm">
          User
        </Button>
      </Flex>
      <Flex alignItems="center">
        <Box bg="#ffffff" borderRadius="full" p={1} mr={2}>
          <AiOutlineUser size={20} color="#1e212d" />
        </Box>
        <p>username</p>
      </Flex>
    </Box>
  );
};

export default Navbar;
