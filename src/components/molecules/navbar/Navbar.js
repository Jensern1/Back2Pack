import React from 'react';
import { Box } from '@chakra-ui/react';
import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <Box className={style.test}>
      <h1>Backpack</h1>
      <p>Home</p>
      <p className={style.gul}>User</p>
      <div>username</div>
    </Box>
  );
};

export default Navbar;
