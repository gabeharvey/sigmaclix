import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Cards = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});

  const flipSound = new Audio('/card-flip.mp3');
  flipSound.volume = 0.7;

  const powerUpSound = new Audio('/power-up.mp3');
  powerUpSound.volume = 0.7;

  const moneySound = new Audio('/coin.mp3');
  moneySound.volume = 0.7;

  const handleFlip = (id) => {
    flipSound.currentTime = 0;
    flipSound.play().catch((err) => console.warn('Sound play failed:', err));
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleHomeClick = () => {
    powerUpSound.currentTime = 0;
    powerUpSound.play().catch((err) => console.warn('Sound play failed:', err));
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurchase = () => {
    moneySound.currentTime = 0;
    moneySound.play().catch((err) => console.warn('Sound play failed:', err));
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const cards = [
    {
      id: 1,
      name: '2018 Topps Heritage Shohei Ohtani RC Auto',
      image: '/ohtani-rc-1.jpg',
      price: '$40,000',
      description: 'Ohtani’s legendary rookie card delivers epic collector value.',
      bubbleText: 'LEGENDARY'
    },
  ];

  return (
    <Box
      id="cards"
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
        Cards
      </Text>

      <Flex wrap="wrap" justify="center" align="center" gap="2rem">
        {cards.map((card) => {
          const isFlipped = flippedCards[card.id];

          return (
            <Box
              key={card.id}
              w="220px"
              h="300px"
              perspective="1000px"
              cursor="pointer"
              onClick={() => handleFlip(card.id)}
              mx="auto"
            >
              <Box
                w="100%"
                h="100%"
                position="relative"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}
                transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
              >
                {/* Front */}
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
                    border="2px solid #FFFFFF"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#FFFFFF"
                  >
                    <Box
                      w="calc(100% - 6px)"
                      h="calc(100% - 6px)"
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
                        <Image src={card.image} alt={card.name} w="100%" h="100%" objectFit="cover" />
                        {/* Floating Bubble with fade */}
                        <Box
                          position="absolute"
                          top="10px"
                          right="10px"
                          bg="#FFFFFF"
                          color="#FF0000"
                          fontSize="0.9rem"
                          px="0.9rem"
                          py="0.6rem"
                          borderRadius="10px"
                          boxShadow="4px 4px 0px #000, 0 0 6px rgba(0,0,0,0.3)"
                          textAlign="center"
                          animation="floatBubble 2s ease-in-out infinite"
                          style={{
                            opacity: isFlipped ? 0 : 1,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                        >
                          {card.bubbleText || 'HOT!'}
                          <Box
                            position="absolute"
                            bottom="-6px"
                            left="20%"
                            width="0"
                            height="0"
                            borderLeft="6px solid transparent"
                            borderRight="6px solid transparent"
                            borderTop="6px solid #FFFFFF"
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
                  style={{ backfaceVisibility: 'hidden' }}
                  transform="rotateY(180deg)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Box
                    w="100%"
                    h="100%"
                    border="2px solid #FFFFFF"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#FF69B4"
                  >
                    <Box
                      w="calc(100% - 6px)"
                      h="calc(100% - 6px)"
                      border="3px solid #FF69B4"
                      borderRadius="13px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="#FF69B4"
                    >
                      <Box
                        w="calc(100% - 4px)"
                        h="calc(100% - 4px)"
                        border="2px solid #FFFFFF"
                        borderRadius="12px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        p="1rem"
                        position="relative"
                        overflow="hidden"
                        bg="#FF69B4"
                        color="#FFFFFF"
                      >
                        {/* Holographic shimmer */}
                        <Box
                          position="absolute"
                          top="0"
                          left="0"
                          w="100%"
                          h="100%"
                          bg="repeating-linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 5px, transparent 5px, transparent 10px)"
                          animation="holoShimmer1 2s linear infinite alternate"
                          pointerEvents="none"
                        />
                        <Box
                          position="absolute"
                          top="0"
                          left="0"
                          w="100%"
                          h="100%"
                          bg="repeating-linear-gradient(-45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 5px, transparent 5px, transparent 10px)"
                          animation="holoShimmer2 3s linear infinite alternate"
                          pointerEvents="none"
                        />
                        <Box
                          position="absolute"
                          top="0"
                          left="0"
                          w="100%"
                          h="100%"
                          bg="repeating-linear-gradient(90deg, rgba(255,0,255,0.04), rgba(0,255,255,0.04), rgba(255,255,0,0.04))"
                          animation="holoShimmer3 4s linear infinite alternate"
                          pointerEvents="none"
                        />

                        {/* Card info */}
                        <Text fontSize="1rem" mb="0.5rem" fontFamily="Luckiest Guy" zIndex="1">
                          {card.name}
                        </Text>
                        <Text fontSize="0.95rem" mb="0.5rem" zIndex="1">
                          {card.description}
                        </Text>
                        <Text fontSize="1rem" fontWeight="bold" color="#FFD700" mb="1rem" zIndex="1">
                          {card.price}
                        </Text>
                        <Button
                          onClick={(e) => { e.stopPropagation(); handlePurchase(); }}
                          fontFamily="'Bangers', system-ui"
                          fontSize="1.1rem"
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
                          zIndex="1"
                        >
                          NEGOTIATE
                        </Button>
                      </Box>
                    </Box>
                  </Box>
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
          px={{ base: '2.5rem', md: '3rem' }} 
          py={{ base: '1rem', md: '1.5rem' }}
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
            0% { transform: translateY(0px) rotate(10deg); }
            50% { transform: translateY(-5px) rotate(10deg); }
            100% { transform: translateY(0px) rotate(10deg); }
          }

          @keyframes holoShimmer1 {
            0% { background-position: 0 0; }
            100% { background-position: 150% 150%; }
          }
          @keyframes holoShimmer2 {
            0% { background-position: 0 0; }
            100% { background-position: -150% 150%; }
          }
          @keyframes holoShimmer3 {
            0% { background-position: 0 0; }
            100% { background-position: 150% -150%; }
          }
        `}
      </style>
    </Box>
  );
};

export default Cards;
