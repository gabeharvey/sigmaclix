import { ChakraProvider, extendTheme, Box, Text } from '@chakra-ui/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const clickSound = new Audio('/diamond.mp3');
clickSound.volume = 0.6;

const MotionBox = motion(Box);

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
  const navigate = useNavigate();

  const handleClick = async () => {
    clickSound.currentTime = 0;
    clickSound.play().catch((err) => console.warn('Sound play failed:', err));
    
    // Navigate to root, then scroll to contact
    navigate('/');
    setTimeout(() => {
      const contact = document.getElementById('contact');
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />

      {/* Floating Bubble */}
      <MotionBox
        position="fixed"
        bottom={{ base: '20px', md: '30px' }}
        right={{ base: '20px', md: '40px' }}
        bg="#FFFFFF"
        border="4px solid #000000"
        borderRadius="20px"
        boxShadow="6px 6px 0 #000"
        maxW={{ base: '250px', md: '300px' }}
        p="1rem"
        fontFamily="'Bangers', system-ui"
        color="#FF69B4"
        zIndex="999"
        cursor="pointer"
        _after={{
          content: `""`,
          position: "absolute",
          bottom: "-20px",
          right: "40px",
          borderWidth: "20px 15px 0",
          borderStyle: "solid",
          borderColor: "#FFFFFF transparent transparent transparent",
          transform: "rotate(15deg)",
          filter: "drop-shadow(4px 4px 0 #000)"
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: 'spring',
          stiffness: 120,
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        }}
        onClick={handleClick}
      >
        <Text fontSize={{ base: '1rem', md: '1.2rem' }} textAlign="center">
          Question about a jewel? 💎<br />
          Summon us!
        </Text>
      </MotionBox>
    </ChakraProvider>
  );
}

export default App;
