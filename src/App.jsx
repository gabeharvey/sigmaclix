import { ChakraProvider, extendTheme } from '@chakra-ui/react'; 
import { Outlet, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FFD500", 
        color: '#1A1A1A',
      },
    },
  },
});

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <ChakraProvider theme={theme}> 
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

