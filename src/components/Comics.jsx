import { Box, Flex, Text, Image, Button, IconButton, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Comics = () => {
  const navigate = useNavigate();
  const [flippedComics, setFlippedComics] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [zoomImage, setZoomImage] = useState(null);

  // Sounds
  const flipSound = new Audio('/card-flip.mp3');
  flipSound.volume = 0.7;

  const powerUpSound = new Audio('/power-up.mp3');
  powerUpSound.volume = 0.7;

  const moneySound = new Audio('/coin.mp3');
  moneySound.volume = 0.7;

  const zoomSound = new Audio('/camera-sound.mp3');
  zoomSound.volume = 0.4;

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
    moneySound.play().catch(err => console.warn('Sound play failed:', err));
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const handleZoom = (e, image) => {
    e.stopPropagation();
    zoomSound.currentTime = 0;
    zoomSound.play().catch(err => console.warn('Zoom sound failed', err));
    setZoomImage(image);
    onOpen();
  };

  const comics = [
    {
      id: 1,
      name: 'X-Men #129 CGC 9.8 White Pages',
      image: '/x-men-129-front.jpg',
      price: '$3,000',
      description: 'The legendary 1st appearance of Emma Frost (The White Queen) and Kitty Pryde.',
      bubbleText: '1st Appearance',
      isSold: false,
    },
    {
      id: 2,
      name: 'The Amazing Spider-Man #300 CGC 9.6 White Pages',
      image: '/venom-front.jpg',
      price: '$1,500',
      description: 'The iconic 1st full appearance of Venom.',
      bubbleText: '1st Appearance',
      isSold: false,
    },
    {
      id: 3,
      name: 'Fantastic Four #94 CGC 9.4 White Pages',
      image: '/agatha-front.jpg',
      price: '$1,200',
      description: 'The spellbinding 1st appearance of Agatha Harkness — Marvel’s mystical matriarch and mentor to Wanda Maximoff.',
      bubbleText: '1st Appearance',
      isSold: false,
    },
    {
      id: 4,
      name: 'NYX #3 CGC 9.8 White Pages',
      image: '/x-23-front.jpg',
      price: '$2,000',
      description: 'The fierce 1st appearance of X-23 — the clone-daughter of Wolverine.',
      bubbleText: '1st Appearance',
      isSold: false,
    },
    {
      id: 5,
      name: 'Captain Britain #8 CGC 9.4 White Pages',
      image: '/psylocke-front.jpg',
      price: '$1,400',
      description: 'The electrifying 1st appearance of Psylocke — telepath, warrior, and one of Marvel’s most enigmatic mutants.',
      bubbleText: '1st Appearance',
      isSold: false,
    },
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
        textShadow="-2px -2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF"
      >
        Comics
      </Text>

      <Flex wrap="wrap" justify="center" align="center" gap="2rem">
        {comics.map((comic) => {
          const isFlipped = flippedComics[comic.id];

          return (
            <Box
              key={comic.id}
              w="220px"
              h="300px"
              perspective="1000px"
              cursor="pointer"
              onClick={() => handleFlip(comic.id)}
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
                  {comic.isSold && (
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
                            onClick={(e) => handleZoom(e, comic.image)}
                          />
                        )}
                        <Image
                          src={comic.image}
                          alt={comic.name}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                        {!isFlipped && comic.bubbleText && (
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
                            {comic.bubbleText}
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
                  {comic.isSold && (
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
                        {comic.name}
                      </Text>
                      <Text fontSize="0.95rem" mb="0.5rem">
                        {comic.description}
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

      {/* Zoom Modal */}
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
          />
          <ModalBody p="0" display="flex">
            {zoomImage && (
              <Image
                src={zoomImage}
                alt="Zoomed comic"
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

export default Comics;
