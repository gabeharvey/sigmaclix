import { Box, Flex, Text, Image, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import '../App.css';

const VintageGames = () => {
  const navigate = useNavigate();
  const [flippedItems, setFlippedItems] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [zoomImage, setZoomImage] = useState(null);

  // Sounds
  const flipSound = new Audio('/card-flip.mp3');
  flipSound.volume = 0.7;

  const powerUpSound = new Audio('/power-up.mp3');
  powerUpSound.volume = 0.7;

  const coinSound = new Audio('/coin.mp3');
  coinSound.volume = 0.7;

  const zoomSound = new Audio('/camera-sound.mp3');
  zoomSound.volume = 0.4;

  const popSound = new Audio('/bubble-pop-2.mp3');
  popSound.volume = 0.7;

  const handleFlip = (id) => {
    flipSound.currentTime = 0;
    flipSound.play().catch(err => console.warn('Sound play failed:', err));
    setFlippedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleHomeClick = () => {
    powerUpSound.currentTime = 0;
    powerUpSound.play().catch(err => console.warn('Sound play failed:', err));
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurchase = () => {
    coinSound.currentTime = 0;
    coinSound.play().catch(err => console.warn('Sound play failed:', err));
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const VintageGames = [
    // {
    //   id: 1,
    //   name: 'Vintage Game Placeholder',
    //   image: '/vintage-games-placeholder.png',
    //   description: 'This is a placeholder collectible item.',
    //   bubbleText: 'HOT!',
    //   isSold: false,
    // },
  ];

  return (
    <Box
      id="VintageGames"
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
        Vintage Games
      </Text>

      <Flex wrap="wrap" justify="center" align="center" gap="2rem">
        {VintageGames.map((item) => {
          const isFlipped = flippedItems[item.id];

          return (
            <Box
              key={item.id}
              w="220px"
              h="300px"
              perspective="1000px"
              cursor="pointer"
              onClick={() => handleFlip(item.id)}
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
                  {item.isSold && (
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
                            _hover={{ transform: 'scale(1.1)', boxShadow: '5px 5px 0 #000' }}
                            _active={{ transform: 'scale(0.95)', boxShadow: '2px 2px 0 #000' }}
                            onClick={(e) => { e.stopPropagation(); setZoomImage(item.image); onOpen(); zoomSound.play().catch(err => console.warn(err)); }}
                          />
                        )}
                        <Image src={item.image} alt={item.name} w="100%" h="100%" objectFit="cover" />
                        {!isFlipped && item.bubbleText && (
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
                            {item.bubbleText}
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
                  {item.isSold && (
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
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p="1rem"
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

                    {/* Info + Button */}
                    <Text fontSize="1rem" mb="0.5rem" fontFamily="Luckiest Guy" color="#FFFFFF">
                      {item.name}
                    </Text>
                    <Text fontSize="0.95rem" mb="0.5rem" color="#FFFFFF">
                      {item.description}
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
                alt="Zoomed collectible"
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
        @keyframes floatBubble { 0% { transform: translateY(0px) rotate(10deg); } 50% { transform: translateY(-5px) rotate(10deg); } 100% { transform: translateY(0px) rotate(10deg); } }
        @keyframes tiltPrism1 { 0% { background-position: 0 0; } 100% { background-position: 200% 200%; } }
        @keyframes tiltPrism2 { 0% { background-position: 0 0; } 100% { background-position: -200% 200%; } }
        @keyframes tiltPrism3 { 0% { background-position: 0 0; } 100% { background-position: 200% -200%; } }
      `}</style>
    </Box>
  );
};

export default VintageGames;
