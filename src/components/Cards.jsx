import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Cards = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});

  // Sounds
  const flipSound = new Audio('/card-flip.mp3');
  flipSound.volume = 0.7;

  const powerUpSound = new Audio('/power-up.mp3');
  powerUpSound.volume = 0.7;

  const moneySound = new Audio('/coin.mp3');
  moneySound.volume = 0.7;

  const handleFlip = (id) => {
    flipSound.currentTime = 0;
    flipSound.play().catch(err => console.warn('Sound play failed:', err));
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleHomeClick = () => {
    powerUpSound.currentTime = 0;
    powerUpSound.play().catch(err => console.warn('Sound play failed:', err));
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurchase = () => {
    moneySound.currentTime = 0;
    moneySound.play().catch(err => console.warn('Sound play failed:', err));
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
      bubbleText: 'LEGENDARY',
      isSold: false,
    },
    {
      id: 2,
      name: '2017 Panini Donruss Patrick Mahomes Rated Rookie /100',
      image: '/mahomes-rc-11.jpg',
      price: '$40,000',
      description: 'Low numbered Rated Rookie in incredible condition.',
      bubbleText: 'GOAT',
      isSold: false,
    },
    {
      id: 3,
      name: '2016 Panini Prizm Dak Prescott Rookie 1/1 Black Finite',
      image: '/dak-11.jpg',
      price: '$40,000',
      description: '1/1 Masterpiece of a Dallas Cowboys Legend.',
      bubbleText: 'Dallas QB',
      isSold: false,
    },
    {
      id: 4,
      name: '2017 Topps Gypsy Queen Aaron Judge Rookie 1/1 Black Ink',
      image: '/judge-rc-trim.jpg',
      price: '$35,000',
      description: '1/1 Black Ink Fortune Teller of the Yankees phenom — holy grail item.',
      bubbleText: 'Yankees Power',
      isSold: false,
    },
    {
      id: 5,
      name: 'Leonard Fournette Panini Prizm Black Finite Auto 1/1',
      image: '/fournette-4.jpg',
      price: '$12,500',
      description: 'The ultimate LSU & NFL collector’s piece — Leonard Fournette’s ultra-rare 1/1 Black Finite autograph from Panini Prizm. A true holy grail for Tigers fans.',
      bubbleText: 'Geaux Tigers',
      isSold: false,
    },
    {
      id: 6,
      name: '2018 Panini Donruss Saquon Barkley Rated Rookie Black Press Proof 03/10',
      image: '/saquon-2.jpg',
      price: '$7,500',
      description: 'Ultra-rare Black Press Proof Rated Rookie of Saquon Barkley, numbered 03/10 — a true centerpiece for NFL, Eagles, and Penn State collectors.',
      bubbleText: 'Fly Eagles Fly',
      isSold: false,
    },
    {
      id: 7,
      name: '2025 Panini Donruss Paige Bueckers RC 2/5 Black Gold Laser',
      image: '/paige-2.jpg',
      price: '$7,500',
      description: 'Ultra-Short Print of Young Phenom ROY Paige Bueckers Rookie Card.',
      bubbleText: 'Phenom',
      isSold: false,
    },
    {
      id: 8,
      name: '2025 Panini Donruss Paige Bueckers RC 1/1',
      image: '/paige-black-laser-1.jpg',
      price: '$7,500',
      description: '1/1 Black Holo Laser Net Marvels RC.',
      bubbleText: 'Paige Buckets',
      isSold: false,
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
        textShadow="-2px -2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF"
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
                  w="100%"
                  h="100%"
                  position="absolute"
                  borderRadius="15px"
                  style={{ backfaceVisibility: 'hidden', overflow: 'hidden' }}
                >
                  {card.isSold && (
                    <Box
                      position="absolute"
                      top="38%"
                      left="0"
                      w="100%"
                      textAlign="center"
                      bg="#FF69B4"
                      color="#FFFFFF"
                      fontWeight="bold"
                      fontSize={{ base: '1.6rem', md: '1.8rem' }}
                      fontFamily="'Luckiest Guy', cursive"
                      zIndex="10"
                      py="0.4rem"
                      textShadow="2px 2px 0 #000"
                      borderTop="5px solid"
                      borderBottom="5px solid"
                      sx={{
                        borderImage:
                          'repeating-linear-gradient(45deg, #FFFFFF 0 4px, transparent 4px 8px) 10',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        boxShadow: '2px 4px 8px rgba(0,0,0,0.35)',
                      }}
                    >
                      SOLD
                    </Box>
                  )}
                  <Box
                    w="100%"
                    h="100%"
                    border="2px solid #FFFFFF"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#FFFFFF"
                    position="relative"
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
                      position="relative"
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
                          src={card.image}
                          alt={card.name}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                        {!isFlipped && card.bubbleText && (
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
                          >
                            {card.bubbleText}
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
                        )}
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
                  {card.isSold && (
                    <Box
                      position="absolute"
                      top="38%"
                      left="0"
                      w="100%"
                      textAlign="center"
                      bg="#FF69B4"
                      color="#FFFFFF"
                      fontWeight="bold"
                      fontSize={{ base: '1.6rem', md: '1.8rem' }}
                      fontFamily="'Luckiest Guy', cursive"
                      zIndex="10"
                      py="0.4rem"
                      textShadow="2px 2px 0 #000"
                      borderTop="5px solid"
                      borderBottom="5px solid"
                      sx={{
                        borderImage:
                          'repeating-linear-gradient(45deg, #FFFFFF 0 4px, transparent 4px 8px) 10',
                          transform: 'rotateY(0deg)',
                          boxShadow: '2px 4px 8px rgba(0,0,0,0.35)',
                      }}
                    >
                      SOLD
                    </Box>
                  )}

                  <Box
                    w="100%"
                    h="100%"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#FF69B4"
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Prism effect */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="100%"
                      h="100%"
                      bg="linear-gradient(135deg, rgba(255,182,193,0.3), rgba(255,105,180,0.3), rgba(255,20,147,0.3))"
                      style={{ mixBlendMode: 'overlay' }}
                      animation="tiltPrism1 4s linear infinite alternate"
                      pointerEvents="none"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="100%"
                      h="100%"
                      bg="linear-gradient(-45deg, rgba(255,182,193,0.2), rgba(255,105,180,0.2), rgba(255,20,147,0.2))"
                      style={{ mixBlendMode: 'overlay' }}
                      animation="tiltPrism2 5s linear infinite alternate"
                      pointerEvents="none"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="100%"
                      h="100%"
                      bg="repeating-linear-gradient(60deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 6px, transparent 6px, transparent 12px)"
                      animation="tiltPrism3 6s linear infinite alternate"
                      pointerEvents="none"
                    />

                    <Box
                      w="100%"
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      p="1rem"
                      zIndex="1"
                      color="#FFFFFF"
                    >
                      <Text fontSize="1rem" mb="0.5rem" fontFamily="Luckiest Guy">
                        {card.name}
                      </Text>
                      <Text fontSize="0.95rem" mb="0.5rem">
                        {card.description}
                      </Text>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePurchase();
                        }}
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
                      >
                        MAKE OFFER
                      </Button>
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

      <style>{`
        @keyframes floatBubble {
          0% { transform: translateY(0px) rotate(10deg); }
          50% { transform: translateY(-5px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(10deg); }
        }
        @keyframes tiltPrism1 {
          0% { background-position: 0 0; }
          100% { background-position: 200% 200%; }
        }
        @keyframes tiltPrism2 {
          0% { background-position: 0 0; }
          100% { background-position: -200% 200%; }
        }
        @keyframes tiltPrism3 {
          0% { background-position: 0 0; }
          100% { background-position: 200% -200%; }
        }
      `}</style>
    </Box>
  );
};

export default Cards;
