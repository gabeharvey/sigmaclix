import { Box, Flex, Text, Image } from '@chakra-ui/react';
import '../App.css'; 

const Comics = () => {
  const comics = [
    { id: 1, name: 'Scarlet Witch #9 Amaranth 1st Appearance CGC 9.8', image: '/amaranth-1st.jpg', price: '$300' },
    // { id: 2, name: 'Shang-Chi', image: '/comic-placeholder.png', price: '$200' },
    // { id: 3, name: 'Rogue', image: '/comic-placeholder.png', price: '$170' },
    // { id: 4, name: 'Blade', image: '/comic-placeholder.png', price: '$260' },
    // { id: 5, name: 'Emma Frost', image: '/comic-placeholder.png', price: '$240' },
    // { id: 6, name: 'Luke Cage', image: '/comic-placeholder.png', price: '$210' },
    // { id: 7, name: 'Mantis', image: '/comic-placeholder.png', price: '$160' },
    // { id: 8, name: 'Beta Ray Bill', image: '/comic-placeholder.png', price: '$280' },
    // { id: 9, name: 'Misty Knight', image: '/comic-placeholder.png', price: '$190' },
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
        textShadow="
          -2px -2px 0 #FFFFFF,  
           2px -2px 0 #FFFFFF,
          -2px  2px 0 #FFFFFF,
           2px  2px 0 #FFFFFF
        "
      >
        Comics
      </Text>

      <Flex
        wrap="wrap"
        justify="center"
        gap={{ base: '1rem', md: '2rem' }}
      >
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
            <Text
              fontSize={{ base: '1rem', md: '1.2rem' }}
              fontWeight="bold"
              color="#00B3B3" 
            >
              {comic.name}
            </Text>
            <Text
              fontSize={{ base: '0.9rem', md: '1rem' }}
              color="#FF69B4" 
            >
              {comic.price}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Comics;
