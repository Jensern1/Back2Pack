import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from 'contexts/UserContext';
import customTheme from 'assets/theme';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './assets/theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <UserProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
