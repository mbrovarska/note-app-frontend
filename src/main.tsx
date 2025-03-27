import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client';
import { ChakraProvider  }from '@chakra-ui/react';
import App from './App';
import customConfigTheme from "./styles/theme";


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider theme={customConfigTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
)
