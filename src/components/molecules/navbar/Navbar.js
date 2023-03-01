import React from 'react';
import { Box, Flex, Button, Image, Text} from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineUser, AiOutlinePlus } from 'react-icons/ai';
import styles from './Navbar.module.scss';
import AddBtn from '../addBtn/AddBtn';

const Navbar = ({ onAddTrip }) => {
  return (
    <Box className={styles.navbar}>
      <Flex alignItems="center" justifyContent="center">
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
      <Box margin="0 auto">
        <AddBtn
          colorScheme='teal'
          aria-label='addBtn'
          size='lg'
          icon={<AiOutlinePlus />}
          onClick={() => onAddTrip(true)}
        />
      </Box>
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
