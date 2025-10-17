import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../App.css';

const clickSound = new Audio('/splash.mp3');

const Stock = () => {
  const items = [
    { id: 1, name: 'Cards', image: '/psylocke-super-trimmed.jpg', color: '#C28840', target: 'cards' },
    { id: 2, name: 'Comics', image: '/amazing-fantasy-15.png', color: '#C28840', target: 'comics' },
    { id: 3, name: 'Vintage Games', image: '/vintage-games-placeholder.png', color: '#C28840', target: 'vintagegames' },
    { id: 4, name: 'Toys', image: '/vinyl-jawa.png', color: '#C28840', target: 'toys' },
  ];

  const handleClick = () => {
    clickSound.currentTime = 0; 
    clickSound.play().catch(err => console.warn('Sound play failed:', err));
  };

  return (
    <Box
      id="stock"
      minH="80vh"
      bg="#FFD500"
      px={{ base: '1rem', md: '3rem', lg: '5rem' }}
      py="3rem"
      fontFamily="'Bangers', system-ui"
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
        Stock
      </Text>

      <Flex wrap="wrap" justify="center" gap={{ base: '1.5rem', md: '3rem' }}>
        {items.map((item) => (
          <Link key={item.id} to={`/${item.target}`}>
            <Box
              role="group"
              w={{ base: '140px', md: '200px', lg: '240px' }}
              h={{ base: '200px', md: '260px', lg: '320px' }}
              cursor="pointer"
              position="relative"
              onClick={handleClick}
              _hover={{
                transform: 'scale(1.05)',
              }}
            >
              {/* Outer white border */}
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
                {/* Middle colored border */}
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
                  {/* Inner white border / image container */}
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
                      mt="0.5rem"
                      fontSize={{ base: '.9rem', md: '1.3rem', lg: '1.6rem' }}
                      fontWeight="bold"
                      color={item.color}
                      position="absolute"
                      bottom="10px"
                      bg="rgba(255,255,255,0.6)"
                      px="0.5rem"
                      borderRadius="5px"
                      transition="background 0.3s"
                      _groupHover={{
                        bg: 'rgba(255,255,255,1)'
                      }}
                      textAlign="center"
                      w="90%"
                      left="50%"
                      transform="translateX(-50%)"
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
    </Box>
  );
};

export default Stock;
