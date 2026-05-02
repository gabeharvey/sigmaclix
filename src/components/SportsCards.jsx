import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SportsCards = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();
const [zoomImage, setZoomImage] = useState(null);

const handleZoom = (e, image) => {
  e.stopPropagation(); 
  zoomSound.currentTime = 0; 
  zoomSound.play().catch(err => console.warn('Zoom sound failed', err));
  setZoomImage(image);
  onOpen();
};

  // Sounds
  const flipSound = new Audio('/card-flip.mp3');
  flipSound.volume = 0.7;

  const powerUpSound = new Audio('/power-up.mp3');
  powerUpSound.volume = 0.7;

  const moneySound = new Audio('/coin.mp3');
  moneySound.volume = 0.7;

  const zoomSound = new Audio('/camera-sound.mp3'); 
  zoomSound.volume = 0.4;

  const popSound = new Audio('/bubble-pop-2.mp3');
  popSound.volume = 0.7;

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
    // =====================
    // BASEBALL
    // =====================
    {
      id: 1,
      name: '2017 Toppys Gypsy Queen Aaron Judge Fortune Teller RC 1/1 Black Ink PSA 10',
      image: '/aaron-judge.jpeg',
      price: '$40,000',
      description: 'Extremely Unique 1/1 Rookie Card of the New York Yankees 3x MVP Home Run King. PSA 10. Only one printed in Black Ink.',
      bubbleText: 'Bronx Bomber',
      isSold: false,
    },
    {
      id: 30,
      name: '2017 Topps Gypsy Queen Aaron Judge On-Card Auto 04/99 PSA 10',
      image: '/judge-rc-4-99.png',
      price: '$40,000',
      description: 'Extremely rare Aaron Judge rookie On-Card Autograph from 2017 Topps Gypsy Queen. Numbered 04/99 and graded PSA 10 GEM MINT.',
      bubbleText: 'Bronx Bomber',
      isSold: false,
    },
    {
      id: 2,
      name: '2018 Topps Heritage Shohei Ohtani Real One RC Auto PSA 9',
      image: '/shohei-rc-1.jpg',
      price: '$40,000',
      description: 'This is a PRIME example and one of the most desirable cards of the MLB Legend.',
      bubbleText: 'LEGENDARY',
      isSold: false,
    },

    // =====================
    // BASKETBALL
    // =====================
    {
      id: 3,
      name: '2025 Topps Chrome Lauren Betts 1/1 Superfractor PSA 9',
      image: '/lauren-betts-2.jpeg',
      price: '$19,999',
      description: 'True 1/1 Superfractor. First card of Lauren Betts following her rise as a National Champion at UCLA and #4 overall WNBA Draft selection.',
      bubbleText: '1/1 Monster',
      isSold: false,
    },
    {
      id: 4,
      name: '2025 Panini Donruss WNBA Paige Bueckers RC 2/5 Black Gold Laser PSA 10',
      image: '/paige-bueckers.jpeg',
      price: '$40,000',
      description: 'A person would have difficulty finding a finer example of a Paige Bueckers Card Rookie Card. A true grail item.',
      bubbleText: 'Grail',
      isSold: false,
    },
    {
      id: 5,
      name: '2025 Donruss Net Marvels Paige Bueckers ROOKIE RC 1/1 Holo Black Laser',
      image: '/paige-bueckers-black-laser.png',
      price: '$40,000',
      description: 'Elite 1/1 rookie grail of Paige Bueckers from Net Marvels. Holo Black Laser finish.',
      bubbleText: 'GRAIL',
      isSold: false,
    },
    {
      id: 6,
      name: '2024-25 Topps Chrome Cooper Flagg RC 75/75 Purple Pulsar Bookend PSA 9',
      image: '/cooper-flagg-trim.jpeg',
      price: '$40,000',
      description: 'VERY clean bookend of generational talent Cooper Flagg.',
      bubbleText: 'Generational Talent',
      isSold: false,
    },
    {
      id: 7,
      name: '2023 Topps Chrome Hannah Hidalgo McDonalds All-American Superfractor 1/1 PSA 10',
      image: '/hannah-hidalgo.jpeg',
      price: '$40,000',
      description: 'Holy grail item of talented young rising star. Notre Dame Fighting Irish. Nuff said.',
      bubbleText: 'Superfractor',
      isSold: false,
    },
    {
      id: 8,
      name: '2023 Topps Chrome Hannah Hidalgo McDonalds All-American Red 2/5 PSA 9',
      image: '/hannah-hidalgo-1.jpeg',
      price: '$40,000',
      description: 'Extremely scarce card of young phenom. Only 5 printed.',
      bubbleText: '2/5',
      isSold: false,
    },

    // =====================
    // FOOTBALL
    // =====================
    {
      id: 9,
      name: '2015 Topps Chrome Mini Amari Cooper RC 1/1 Superfractor BGS 9.5 GEM MT 1989 Insert',
      image: '/amari-cooper-mini-1989-superfractor.png',
      price: '$40,000',
      description: 'Ultra rare Superfractor rookie of Amari Cooper from the iconic 1989 insert series.',
      bubbleText: 'SUPERFRACTOR',
      isSold: false,
    },
    {
      id: 10,
      name: '2015 Topps Chrome Mini Amari Cooper RC 1/1 Superfractor BGS 10 PRISTINE Variant',
      image: '/amari-cooper-variant-superfractor.png',
      price: '$40,000',
      description: 'Pristine graded variant Superfractor of Amari Cooper rookie card.',
      bubbleText: 'PRISTINE',
      isSold: false,
    },
    {
      id: 11,
      name: '2016 Panini Spectra Ezekiel Elliott / Dak Prescott Dual RC Auto 1/1 PSA 8',
      image: '/dak-zeke-dual-auto-superfractor.png',
      price: '$40,000',
      description: 'Dual auto rookie 1/1 featuring Ezekiel Elliott and Dak Prescott.',
      bubbleText: 'DUAL AUTO',
      isSold: false,
    },
    {
      id: 12,
      name: '2014 Topps Chrome Carlos Hyde RC 1/1 Superfractor BGS 9.5 GEM MT 1965 Insert',
      image: '/carlos-hyde-superfractor.png',
      price: '$40,000',
      description: 'Superfractor rookie of Carlos Hyde with 1965 insert design.',
      bubbleText: 'SUPERFRACTOR',
      isSold: false,
    },
    {
      id: 13,
      name: '2014 Topps Chrome Mini Jeremy Hill RC 1/1 Superfractor BGS 9.5 GEM MT 1985 Insert',
      image: '/jeremy-hill-superfractor.png',
      price: '$40,000',
      description: 'Superfractor rookie of Jeremy Hill from 1985 insert set.',
      bubbleText: 'SUPERFRACTOR',
      isSold: false,
    },
    {
      id: 14,
      name: '2017 Panini Donruss Patrick Mahomes Rated Rookie 053/100 Silver Press Proof PSA 9',
      image: '/patrick-mahomes.jpeg',
      price: '$40,000',
      description: 'Limited Print Rated Rookie of NFL Legend.',
      bubbleText: 'GOAT',
      isSold: true,
    },

    // DAK PRESCOTT GROUP
    {
      id: 15,
      name: '2016 Panini Prizm Dak Prescott RC 10/10 Bookend Gold Auto PSA 7',
      image: '/dak-3.jpg',
      price: '$40,000',
      description: 'Absolutely stunning gem of the Dallas Cowboys QB Legend. Scratch on back of card visible in certain angles.',
      bubbleText: 'Dallas Cowboys',
      isSold: true,
    },
    {
      id: 16,
      name: '2016 Panini Prizm Dak Prescott RC 3/5 Gold Vinyl PSA 8',
      image: '/dak-prescott.jpeg',
      price: '$40,000',
      description: 'Only 5 made of this crown jewel. Extremely scarce card of NFL legend.',
      bubbleText: 'Scarce',
      isSold: false,
    },
    {
      id: 17,
      name: '2016 Panini Prizm Dak Prescott RC 2/5 Gold Vinyl PSA 10',
      image: '/dak-prescott-10-trim.jpeg',
      price: '$40,000',
      description: 'Stunning perfect masterpiece of the Dallas Legend. Only 5 printed. PSA 10.',
      bubbleText: 'Grail Item',
      isSold: false,
    },
    {
      id: 18,
      name: '2016 Panini Donruss Elite Dak Prescott 1/1 Gold PSA 9',
      image: '/dak-first.jpeg',
      price: '$40,000',
      description: 'First series featuring Dak Prescott in Dallas Cowboys Uniform',
      bubbleText: 'Big D Grail',
      isSold: false,
    },
    {
      id: 19,
      name: '2016 Panini Certified Dak Prescott RC 1/1 New Generation Jersey Black PSA 7',
      image: '/dak-certified-black.png',
      price: '$40,000',
      description: 'Black jersey rookie 1/1 Dak Prescott from Certified New Generation.',
      bubbleText: 'BLACK JERSEY',
      isSold: false,
    },
    {
      id: 20,
      name: '2016 Panini Donruss Dak Prescott Rookie Phenom RC 1/1 Auto NFLPA Logo PSA 7',
      image: '/dak-rookie-phenom.png',
      price: '$40,000',
      description: 'NFLPA Logo Auto Rookie Phenom 1/1 of Dak Prescott.',
      bubbleText: 'AUTO 1/1',
      isSold: false,
    },
    {
      id: 21,
      name: '2016 Panini Prizm Dak Prescott RC 1/1 Super Prime Jersey PSA 10 GEM MT',
      image: '/dak-super-prime.png',
      price: '$40,000',
      description: 'Premier Jersey Super Prime 1/1 PSA 10 Dak Prescott rookie.',
      bubbleText: 'PSA 10',
      isSold: false,
    },
    {
      id: 22,
      name: '2016 Panini Prizm Dak Prescott RC 1/1 Rookie Introductions Black Finite',
      image: '/dak-black-finite.png',
      price: '$40,000',
      description: 'Black Finite 1/1 Rookie Introductions insert of Dak Prescott.',
      bubbleText: 'BLACK FINITE',
      isSold: false,
    },
    {
      id: 23,
      name: '2016 Panini Cyber Monday Dak Prescott RC 1/1 Hyperplaid Memorabilia PSA 8',
      image: '/dak-hyperplaid.png',
      price: '$40,000',
      description: 'Hyperplaid memorabilia 1/1 rookie Dak Prescott Cyber Monday release.',
      bubbleText: 'HYPERPLAID',
      isSold: false,
    },
    {
      id: 24,
      name: '2016 Panini Donruss Elite Dak Prescott RC 4/5 Blue Color Match Jersey PSA 9',
      image: '/dak-blue-color-match.png',
      price: '$40,000',
      description: 'Blue Color Match jersey /5 parallel of Dak Prescott rookie.',
      bubbleText: '4/5',
      isSold: false,
    },

    // =====================
    // SOCCER
    // =====================
    {
      id: 25,
      name: '2023-24 Topps Chrome UCC Lamine Yamal 031/150 Blue Refractor Auto PSA 9',
      image: '/yamal-1.jpg',
      price: '$40,000',
      description: 'Gorgeous auto specimen of young soccer prodigy. Iconic with plenty of upside. Only 150 printed.',
      bubbleText: 'Prodigy',
      isSold: true,
    },
    {
      id: 26,
      name: '2023-24 Topps Chrome UCC Lamine Yamal 236/250 Pink Geometric Refractor PSA 10',
      image: '/yamal-pink-10-trim.jpg',
      price: '$40,000',
      description: 'Pink Geometric 🌸. Only 250 printed.',
      bubbleText: '🌸',
      isSold: true,
    },
    {
      id: 27,
      name: '2023-24 Topps Chrome UCC Lamine Yamal 054/250 Pink Geometric Refractor PSA 9',
      image: '/yamal-pink-9-trim.jpg',
      price: '$40,000',
      description: 'Pink Geometric 🌸. Only 250 printed.',
      bubbleText: '🌸',
      isSold: true,
    },
    {
      id: 28,
      name: '2023-24 Topps Chrome UCC Lamine Yamal 285/299 Violet Speckle Refractor PSA 10',
      image: '/yamal-violet-10-trim.jpg',
      price: '$40,000',
      description: 'Purple Pulsar 💣. Only 299 printed. PERFECT specimen',
      bubbleText: '💣',
      isSold: true,
    },

    // =====================
    // WRESTLING
    // =====================
    {
      id: 29,
      name: '2022 Panini Donruss Chronicles WWE Roxanne Perez Rated Rookie 05/10 Gold PSA 9',
      image: '/roxanne-perez.jpeg',
      price: '$40,000',
      description: 'Extremely popular rising WWE superstar rookie card. Only 10 printed.',
      bubbleText: 'WWE Rising Phenom',
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
        Sports Cards
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
                        {!isFlipped && (
                          <IconButton
                            aria-label="Zoom image"
                            icon={<SearchIcon />}
                            size="sm"
                            position="absolute"
                            bottom="10px"
                            left="10px"
                            bg="#FFFFFF"
                            color="#FF69B4"
                            border="2px solid #FF69B4"
                            borderRadius="8px"
                            w="36px"
                            h="36px"
                            zIndex="5"
                            boxShadow="3px 3px 0 #000"
                            _hover={{
                              transform: 'scale(1.1)',
                              boxShadow: '5px 5px 0 #000',
                              bg: '#FFFFFF',
                            }}
                            _active={{
                              transform: 'scale(0.95)',
                              boxShadow: '2px 2px 0 #000',
                            }}
                            onClick={(e) => handleZoom(e, card.image)}
                          />
                        )}
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
              <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay bg="rgba(0,0,0,0.85)" />
                  <ModalContent
                    bg="transparent"
                    maxW="unset"
                    w="auto"
                    h="auto"
                    border="4px solid #FF69B4"
                    borderRadius="15px"
                    overflow="hidden"
                  >
                  <ModalCloseButton
                    top="12px"
                    right="12px"
                    color="#FF69B4"
                    bg="#FFFFFF"
                    border="2px solid #FF69B4"
                    borderRadius="8px"
                    boxShadow="3px 3px 0 #000"
                    _hover={{
                      transform: 'scale(1.1)',
                      boxShadow: '5px 5px 0 #000',
                      bg: '#FFFFFF',
                    }}
                    _active={{
                      transform: 'scale(0.95)',
                      boxShadow: '2px 2px 0 #000',
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent any unwanted bubbling
                      popSound.currentTime = 0;
                      popSound.play().catch(err => console.warn('Pop sound failed', err));
                      onClose();
                    }}
                  />
                  <ModalBody p="0" display="flex">
                    {zoomImage && (
                  <Image
                    src={zoomImage}
                    alt="Zoomed card"
                    w="auto"
                    h="auto"
                    maxW="95vw"
                    maxH="95vh"
                    objectFit="contain"
                    display="block"
                  />

                    )}
                  </ModalBody>
                </ModalContent>
              </Modal>
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

export default SportsCards;
