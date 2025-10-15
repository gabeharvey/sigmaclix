import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import MainLayout from './components/MainLayout'; 
import Cards from './components/Cards.jsx';
import Comics from './components/Comics.jsx';
import VintageGames from './components/VintageGames.jsx';
import Toys from './components/Toys.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'transparent',
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <MainLayout /> }, 
      { path: 'cards', element: <Cards /> }, 
      { path: 'comics', element: <Comics /> }, 
      { path: 'vintagegames', element: <VintageGames /> }, 
      { path: 'toys', element: <Toys /> }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);