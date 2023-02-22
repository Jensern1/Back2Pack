import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const AddBtn = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <IconButton
      colorScheme='teal'
      aria-label='addBtn'
      size='lg'
      isRound='true'
      icon={<AddIcon />}
      onClick={handleClick}
    />
  );
};

export default AddBtn;
