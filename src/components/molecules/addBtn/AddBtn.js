import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconButton, Box, Text } from '@chakra-ui/react';
import styles from './AddBtn.module.scss';

const AddBtn = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <IconButton
      colorScheme='teal'
      aria-label='addBtn'
      size='lg'
      icon={<AiOutlinePlus />}
      className={styles.addButton}
      onClick={() => handleClick()}
    >
      Create a new Button
    </IconButton>
  );
};


export default AddBtn;
