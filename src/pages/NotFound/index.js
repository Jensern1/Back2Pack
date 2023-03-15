import React from 'react';
import style from './style.module.scss';
import { Text, Stack } from '@chakra-ui/react';

function NotFound() {
  return (
    <Stack className={style.text}>
      <Text as='samp'>404: Page not found!</Text>
      <Text as='samp'>Back2Back sad </Text>
    </Stack>
  );
}

export default NotFound;
