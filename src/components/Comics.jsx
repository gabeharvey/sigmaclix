import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Comics = () => {
  const navigate = useNavigate();
  const [flippedComics, setFlippedComics] = useState({});

  const flipSound = new Audio('/card-flip.mp3');
  flipSound.volume = 0.7;

  const powerUpSound = new Audio('/power-up.mp3'); 
  powerUpSound.volume = 0.7;

  const moneySound = new Audio('/coin.mp3'); 
  moneySound.volume = 0.7;

  const handleFlip = (id) => {
    flipSound.currentTime = 0;
    flipSound.play().catch(err => console.warn('Sound play failed:', err));
    setFlippedComics(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleHomeClick = () => {
    powerUpSound.currentTime = 0;
    powerUpSound.play().catch(err => console.warn('Sound play failed:', err));
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurchase = () => {
    moneySound.currentTime = 0; 
    moneySound.play().catch((err) => console.warn('Sound play failed:', err));

    navigate('/'); 
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const comics = [
    {
      id: 1,
      name: 'X-Men #129 CGC 9.8 White Pages – 1st Appearance of the White Queen (Emma Frost)',
      image: '/x-men-129-front.jpg',
      price: '$3,000',
      description: 'The legendary 1st appearance of Emma Frost, the White Queen, and Kitty Pryde — a true Bronze Age key for elite collectors.',
      bubbleText: '👑 1st Appearance 👑'
    }
    // You can add more comics here following the same structure
  ];

  return (
    <Box
      id="comics"
      minH="100vh"
      bg="#FFD500"
      px={{ base: '1rem', md: '3rem', lg: '5rem' }}
      py="3rem"
      fontFamily="'Bangers', system-ui"
      color="#FF69B4"
    >
      <Text
        fontSize={{ base: '1.8rem', md: '2.3rem', lg: '2.8rem' }}
        textAlign="center"
        mb="2rem"
        color="#FF69B4"
        textShadow="
          -2px -2px 0 #FFFFFF,  
           2px -2px 0 #FFFFFF,
          -2px  2px 0 #FFFFFF,
           2px  2px 0 #FFFFFF
        "
      >
        Comics
      </Text>
            <Flex
              wrap="wrap"
              justify="center"
              align="center"
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: '2rem', md: '2rem' }}
            >
        {comics.map(comic => {
          const isFlipped = flippedComics[comic.id];

          return (
            <Box
              key={comic.id}
              w={{ base: '75%', sm: '60%', md: '200px', lg: '220px' }}
              h={{ base: '430px', sm: '450px', md: '300px' }}
              perspective="1000px"
              cursor="pointer"
              onClick={() => handleFlip(comic.id)}
              mx="auto"
            >
              <Box
                w="100%"
                h="100%"
                position="relative"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}
                transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
              >
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  borderRadius="15px"
                  style={{ backfaceVisibility: 'hidden', overflow: 'hidden' }}
                >
                  <Box
                    w="100%"
                    h="100%"
                    border="1px solid #FFFFFF"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#FFFFFF"
                  >
                    <Box
                      w="calc(100% - 8px)"
                      h="calc(100% - 8px)"
                      border="3px solid #E6BE8A"
                      borderRadius="13px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="#FFFFFF"
                    >
                      <Box
                        w="calc(100% - 4px)"
                        h="calc(100% - 4px)"
                        border="2px solid #FFFFFF"
                        borderRadius="12px"
                        overflow="hidden"
                        position="relative"
                      >
                        <Image
                          src={comic.image}
                          alt={comic.name}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                        <Box
                          position="absolute"
                          top="10px"
                          right="10px"
                          bg="#FFEB3B"
                          color="#FF0000"
                          // fontWeight="bold"
                          fontSize="0.9rem"
                          px="0.9rem"
                          py="0.6rem"
                          borderRadius="10px"
                          boxShadow="4px 4px 0px #000, 0 0 6px rgba(0,0,0,0.3)"
                          textAlign="center"
                          transform="rotate(-10deg)"
                          animation="floatBubble 2s ease-in-out infinite"
                        >
                          {comic.bubbleText || 'HOT!'}
                          <Box
                            position="absolute"
                            bottom="-6px"
                            left="20%"
                            width="0"
                            height="0"
                            borderLeft="6px solid transparent"
                            borderRight="6px solid transparent"
                            borderTop="6px solid #FFEB3B"
                            transform="rotate(10deg)"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* Back */}
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  borderRadius="15px"
                  bg="#FF69B4"
                  color="#FFFFFF"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="1rem"
                  boxShadow="0 6px 15px rgba(0,0,0,0.3)"
                  style={{ backfaceVisibility: 'hidden' }}
                  transform="rotateY(180deg)"
                  textAlign="center"
                >
                  <Text fontSize={{ base: '0.9rem', md: '1rem' }} fontWeight="bold" mb="0.5rem">
                    {comic.name}
                  </Text>
                  <Text fontSize={{ base: '0.85rem', md: '0.95rem' }} mb="0.5rem">
                    {comic.description}
                  </Text>
                  <Text fontSize={{ base: '0.9rem', md: '1rem' }} fontWeight="bold" color="#FFD700" mb="1rem">
                    {comic.price}
                  </Text>
                  <Button
                    onClick={(e) => { e.stopPropagation(); handlePurchase(comic.name); }}
                    fontFamily="'Bangers', system-ui"
                    fontSize={{ base: '1rem', md: '1.1rem' }}
                    bg="#FFFFFF"
                    color="#FF69B4"
                    px="2.5rem"
                    py="0.8rem"
                    borderRadius="10px"
                    border="3px solid #FF69B4"
                    boxShadow="0 0 0 2px #FFFFFF, 0 0 0 4px #FF69B4"
                    _hover={{
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 10px #FFFFFF, 0 0 15px #FF69B4',
                      bg: '#FFFFFF',
                    }}
                    transition="all 0.3s ease-in-out"
                  >
                    NEGOTIATE
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>

      <Flex justify="center" mt="3rem">
        <Button
          onClick={handleHomeClick}
          fontFamily="'Bangers', system-ui"
          fontSize={{ base: '1.8rem', md: '2.2rem' }}
          bg="#FFFFFF"
          color="#FF69B4"
          px="3rem"
          py="1.5rem"
          borderRadius="25px 10px 25px 15px"
          border="3px solid #FF69B4"
          boxShadow="0 0 0 4px #FFFFFF, 0 0 0 6px #FF69B4"
          _hover={{
            transform: 'scale(1.1) rotate(-1deg)',
            boxShadow: '0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FF69B4',
            bg: '#FFFFFF',
          }}
          transition="all 0.3s ease-in-out"
        >
          Home
        </Button>
      </Flex>

      <style>
        {`
          @keyframes floatBubble {
            0%, 100% { transform: translateY(0px) rotate(-10deg); }
            50% { transform: translateY(-5px) rotate(-10deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default Comics;
