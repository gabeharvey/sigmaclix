import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const Comics = () => {
  const navigate = useNavigate(); 

  const comics = [
    { id: 1, name: 'Scarlet Witch #9 Amaranth 1st Cover Appearance CGC 9.8', image: '/amaranth-1st.jpg', price: '$300' },
  ];

  const clickSound = new Audio('/power-up.mp3'); 

  const handleHomeClick = () => {
    clickSound.play(); 
    navigate('/'); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

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
        textShadow="
          -2px -2px 0 #FFFFFF,  
           2px -2px 0 #FFFFFF,
          -2px  2px 0 #FFFFFF,
           2px  2px 0 #FFFFFF
        "
      >
        Comics
      </Text>

      <Flex wrap="wrap" justify="center" gap={{ base: '1rem', md: '2rem' }}>
        {comics.map((comic) => (
          <Box
            key={comic.id}
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
              src={comic.image}
              alt={comic.name}
              w="100%"
              h="200px"
              objectFit="cover"
              borderRadius="10px"
              mb="0.5rem"
            />
            <Text fontSize={{ base: '1rem', md: '1.2rem' }} fontWeight="bold" color="#00B3B3">
              {comic.name}
            </Text>
            <Text fontSize={{ base: '0.9rem', md: '1rem' }} color="#FF69B4">
              {comic.price}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex justify="center" mt="3rem">
        <Button
          onClick={handleHomeClick}
          fontFamily="'Bangers', system-ui"
          fontSize={{ base: '1.8rem', md: '2.2rem' }}
          bg="#FFFFFF"
          color="#FF69B4"
          px="3rem"
          py="1.5rem"
          borderRadius="25px 10px 25px 15px"
          border="3px solid #FF69B4"
          boxShadow='0 0 0 4px #FFFFFF, 0 0 0 6px #FF69B4'
          _hover={{ 
            transform: 'scale(1.1) rotate(-1deg)',
            boxShadow: '0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FF69B4',
            bg: '#FFFFFF'
          }}
          transition="all 0.3s ease-in-out"
        >
          Home
        </Button>
      </Flex>
    </Box>
  );
};

export default Comics;
