import { Box, Flex, Text, Image } from '@chakra-ui/react';
import '../App.css'; 

const VintageGames = () => {
  const games = [
    { id: 1, name: 'Super Mario Bros.', image: '/vintage-games-placeholder.png', price: '$300' },
    { id: 2, name: 'The Legend of Zelda', image: '/vintage-games-placeholder.png', price: '$450' },
    { id: 3, name: 'Metroid', image: '/vintage-games-placeholder.png', price: '$350' },
    { id: 4, name: 'Castlevania', image: '/vintage-games-placeholder.png', price: '$400' },
  ];

  return (
    <Box
      id="vintage-games"
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
        Vintage Games
      </Text>

      <Flex
        wrap="wrap"
        justify="center"
        gap={{ base: '1rem', md: '2rem' }}
      >
        {games.map((game) => (
          <Box
            key={game.id}
            bg="#FFF9F0" 
            borderRadius="15px"
            boxShadow="0 6px 15px rgba(0,0,0,0.2)" 
            overflow="hidden"
            w={{ base: '150px', md: '200px', lg: '220px' }}
            textAlign="center"
            p="1rem"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            }}
          >
            <Image
              src={game.image}
              alt={game.name}
              w="100%"
              h="200px"
              objectFit="cover"
              borderRadius="10px"
              mb="0.5rem"
            />
            <Text
              fontSize={{ base: '1rem', md: '1.2rem' }}
              fontWeight="bold"
              color="#00B3B3" 
            >
              {game.name}
            </Text>
            <Text
              fontSize={{ base: '0.9rem', md: '1rem' }}
              color="#FF69B4" 
            >
              {game.price}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default VintageGames;
