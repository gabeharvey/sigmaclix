import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const clickSound = new Audio('/splash.mp3');
const powerUpSound = new Audio('/power-up.mp3');
powerUpSound.volume = 0.7;

const Cards = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: 'Sports Cards',
      image: '/ohtani-rc.jpg',
      color: '#E6BE8A',
      target: '/cards/sports',
    },
    {
      id: 2,
      name: 'TCG Cards',
      image: '/storm-superfractor-1.jpeg',
      color: '#E6BE8A',
      target: '/cards/tcg',
    },
  ];

  const handleCardClick = () => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  };

  const handleHomeClick = () => {
    powerUpSound.currentTime = 0;
    powerUpSound.play().catch(() => {});
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      minH="80vh"
      bg="#FFD500"
      px={{ base: '1rem', md: '3rem', lg: '5rem' }}
      py="3rem"
      fontFamily="'Bangers', system-ui"
    >
      {/* Page Title */}
      <Text
        fontSize={{ base: '1.8rem', md: '2.3rem', lg: '2.8rem' }}
        textAlign="center"
        mb="2.5rem"
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

      {/* Card Options */}
      <Flex justify="center" gap={{ base: '1.5rem', md: '3rem' }} wrap="wrap">
        {items.map((item) => (
          <Link key={item.id} to={item.target}>
            <Box
              role="group"
              w={{ base: '160px', md: '220px', lg: '260px' }}
              h={{ base: '220px', md: '280px', lg: '340px' }}
              cursor="pointer"
              position="relative"
              onClick={handleCardClick}
              transition="transform 0.2s ease"
              _hover={{ transform: 'scale(1.05)' }}
            >
              {/* Outer border */}
              <Box
                w="100%"
                h="100%"
                border="1px solid #FFFFFF"
                borderRadius="15px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#FFF9F0"
              >
                {/* Middle border */}
                <Box
                  w="calc(100% - 8px)"
                  h="calc(100% - 8px)"
                  border={`3px solid ${item.color}`}
                  borderRadius="13px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#FFF9F0"
                >
                  {/* Image container */}
                  <Box
                    w="calc(100% - 4px)"
                    h="calc(100% - 4px)"
                    border="2px solid #FFFFFF"
                    borderRadius="12px"
                    overflow="hidden"
                    position="relative"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />

                    <Text
                      fontSize={{ base: '1rem', md: '1.4rem', lg: '1.7rem' }}
                      fontWeight="bold"
                      color="#FF69B4"
                      position="absolute"
                      bottom="10px"
                      bg="rgba(255,255,255,0.6)"
                      px="0.6rem"
                      borderRadius="5px"
                      textAlign="center"
                      w="90%"
                      left="50%"
                      transform="translateX(-50%)"
                      transition="background 0.3s"
                      _groupHover={{ bg: 'rgba(255,255,255,1)' }}
                    >
                      {item.name}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Flex>

      {/* Home Button */}
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
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: 'scale(1.1) rotate(-1deg)',
            boxShadow:
              '0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FF69B4',
            bg: '#FFFFFF',
          }}
        >
          Home
        </Button>
      </Flex>
    </Box>
  );
};

export default Cards;
