import { Box, Flex, Text, Image } from '@chakra-ui/react';
import '../App.css'; 

const Cards = () => {
  const cards = [
    { id: 1, name: 'Venom', image: '/venom.png', price: '$200' },
    { id: 2, name: 'Hulk', image: '/hulk.png', price: '$100' },
    { id: 3, name: 'Spider-Man', image: '/spider-man.png', price: '$500' },
    { id: 4, name: 'Wonder Woman', image: '/wonder-woman.png', price: '$200' },
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
      <Flex
        wrap="wrap"
        justify="center"
        gap={{ base: '1rem', md: '2rem' }}
      >
        {cards.map((card) => (
        <Box
        key={card.id}
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
            src={card.image}
            alt={card.name}
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
            {card.name}
        </Text>
        <Text
            fontSize={{ base: '0.9rem', md: '1rem' }}
            color="#FF69B4" 
        >
            {card.price}
        </Text>
        </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Cards;
