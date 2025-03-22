import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client';
import { ChakraProvider  }from '@chakra-ui/react';
import App from './App';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
)
