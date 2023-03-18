import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconButton, Box, Text } from '@chakra-ui/react';
// import styles from './AddBtn.module.scss';

const AddBtn = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton mr={5}
        colorScheme='teal'
        aria-label='addBtn'
        size='lg'
        icon={<AiOutlinePlus />}
        onClick={() => handleClick()}
      />
      <Text ml={2} color="teal.500" fontSize="1.2rem" fontWeight="bold">
        Add a new Trip
      </Text>
    </Box>
  );
};


export default AddBtn;
