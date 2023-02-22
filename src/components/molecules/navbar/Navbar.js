import React from 'react';
import { Box } from '@chakra-ui/react';
import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <Box className={style.nav}>
      <div>
        <h1>Back2pack</h1>
        <p>Home</p>
        <p>User</p>
      </div>
      <p>username</p>
    </Box>
  );
};

export default Navbar;
