import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';

const Stock = () => {
  const items = [
    { id: 1, name: 'Cards', image: '/cards-placeholder.png', color: '#00B3B3', target: 'cards' },
    { id: 2, name: 'Comics', image: '/comics-placeholder.png', color: '#FF69B4', target: 'comics' },
    { id: 3, name: 'Vintage Games', image: '/vintage-games-placeholder.png', color: '#00B3B3', target: 'vintage-games' },
    { id: 4, name: 'Toys', image: '/toys-placeholder.png', color: '#FF69B4', target: 'toys' },
  ];

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
      >
        Stock
      </Text>

      <Flex
        wrap="wrap"
        justify="center"
        gap={{ base: '1.5rem', md: '3rem' }}
      >
        {items.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.target}  
            smooth={true}
            duration={500}
            offset={-300}
          >
            <Box
              role="group"
              bg="#FFF9F0"
              borderRadius="15px"
              border="8px solid #FFFFFF"
              boxShadow="0 6px 15px rgba(0,0,0,0.2)"
              overflow="hidden"
              w={{ base: '120px', md: '180px', lg: '220px' }}
              h={{ base: '180px', md: '240px', lg: '300px' }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-end"
              transition="transform 0.3s, box-shadow 0.3s"
              cursor="pointer"
              position="relative"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}
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
              >
                {item.name}
              </Text>
            </Box>
          </ScrollLink>
        ))}
      </Flex>
    </Box>
  );
};

export default Stock;
