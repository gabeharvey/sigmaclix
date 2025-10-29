import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      minH="100vh"
      bg="#FFD500"
      py={{ base: '3rem', md: '5rem' }}
      px={{ base: '1rem', md: '4rem', lg: '6rem' }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontFamily="'Luckiest Guy', system-ui"
    >
      {/* Presentation Section */}
      <Box
        position="relative"
        w={{ base: '100%', md: '80%', lg: '70%' }}
        bg="#FFFFFF" 
        borderRadius="20px"
        border="6px solid #FF69B4" 
        boxShadow="0 6px 20px rgba(0,0,0,0.15)"
        mb="3rem"
        p={{ base: '2rem', md: '3rem' }}
        textAlign="center"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          right: '-10px',
          bottom: '-10px',
          borderRadius: '25px',
          border: '6px solid #FFFFFF', 
          zIndex: 0,
        }}
      >
        <Box position="relative" zIndex={1}>

          <Text
            fontSize={{ base: '2.2rem', md: '3.2rem', lg: '3.8rem' }}
            mb="1rem"
            fontFamily="'Bangers', system-ui"
            color="#FFD500"
            textShadow="
              -2px -2px 0 #FFFFFF,  
               2px -2px 0 #FFFFFF,
              -2px  2px 0 #FFFFFF,
               2px  2px 0 #FFFFFF
            "
          >
            Sigma Clix
          </Text>

          <Text
            fontSize={{ base: '1.4rem', md: '1.8rem' }}
            mb="1.5rem"
            color="#FF69B4"
            textShadow="
              -1px -1px 0 #FFFFFF,  
               1px -1px 0 #FFFFFF,
              -1px  1px 0 #FFFFFF,
               1px  1px 0 #FFFFFF
            "
          >
            More Than Hits - It&apos;s Sigma.
          </Text>

          {/* Retro TV Video Box */}
          <Box
            position="relative"
            w={{ base: '280px', md: '350px', lg: '420px' }} 
            mx="auto"
            borderRadius="25px" 
            overflow="hidden"
            mb="2rem"
            border="6px solid #FF69B4" 
            boxShadow="0 0 0 4px #FFFFFF, inset 0 0 10px rgba(0,0,0,0.2)" 
            _after={{
              content: '""',
              position: 'absolute',
              top: '-8px',
              left: '-8px',
              right: '-8px',
              bottom: '-8px',
              borderRadius: '30px',
              border: '4px solid #FF69B4', 
              pointerEvents: 'none',
            }}
          >
            <Box
              as="video"
              src="/sigma-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              display="block"
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </Box>

          <Text
            fontSize={{ base: '1rem', md: '1.2rem' }}
            maxW="650px"
            mx="auto"
            color="#FF69B4"
            mb="2rem"
            textShadow="
              -1px -1px 0 #FFFFFF,  
               1px -1px 0 #FFFFFF,
              -1px  1px 0 #FFFFFF,
               1px  1px 0 #FFFFFF
            "
          >
            From 1st Appearance White Page CGC-graded comics to ultra-short-print cards, Sigma Clix offers holy grail, legendary items that serious collectors covet.
            Authentic, unique, and prestigious — that’s our standard.
          </Text>

          <Button
            onClick={handleExplore}
            bg="#FFFFFF"
            color="#FF69B4"
            fontFamily="'Bangers', system-ui"
            fontSize={{ base: '1.2rem', md: '1.4rem' }}
            px={{ base: '2rem', md: '3rem' }}
            py="1.2rem"
            borderRadius="25px 10px 25px 15px"
            border="3px solid #FF69B4"
            boxShadow="0 0 0 4px #FFFFFF, 0 0 0 6px #FF69B4"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.08) rotate(-1deg)',
              boxShadow:
                '0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FF69B4',
              bg: '#FFFFFF',
            }}
          >
            Explore the Collection
          </Button>
        </Box>
      </Box>

      {/* Informational Section */}
      <Box
        position="relative"
        w={{ base: '100%', md: '80%', lg: '70%' }}
        bg="#FFFFFF"
        borderRadius="20px"
        border="6px solid #FF69B4"
        boxShadow="0 6px 20px rgba(0,0,0,0.15)"
        p={{ base: '1.5rem', md: '3rem' }}
        textAlign="center"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          right: '-10px',
          bottom: '-10px',
          borderRadius: '25px',
          border: '6px solid #FFFFFF',
          zIndex: 0,
        }}
      >
        <Box position="relative" zIndex={1}>
          <Text
            fontSize={{ base: '2rem', md: '2.6rem' }}
            color="#FF69B4"
            textShadow="
              -2px -2px 0 #FFFFFF,  
               2px -2px 0 #FFFFFF,
              -2px  2px 0 #FFFFFF,
               2px  2px 0 #FFFFFF
            "
            mb="1rem"
          >
            What Makes <span style={{ color: '#FFD500', fontFamily: "'Bangers', system-ui" }}>Sigma Clix</span> Different
          </Text>

          <Text
            fontSize={{ base: '1rem', md: '1.2rem' }}
            color="#FF69B4"
            lineHeight="1.6"
            textShadow="
              -1px -1px 0 #FFFFFF,  
               1px -1px 0 #FFFFFF,
              -1px  1px 0 #FFFFFF,
               1px  1px 0 #FFFFFF
            "
          >
            We ONLY seek out the best. Every <span style={{ color: '#FFD500', fontFamily: "'Bangers', system-ui" }}>Sigma Clix</span> item is hand-selected for cultural impact, extreme rarity, and investment value.
            <br />
            <br />
            From <em>holy grail comics</em> to <em>legendary 1/1 rookie cards</em>, our mission is to give collectors access to crown jewel items —
            authenticated, protected, and delivered to you with extreme care.
            <br />
            <br />
            Follow us on social media to gain first access to exclusive items, live reveals, and collector experiences that redefine what owning a piece of history feels like. We genuinely ❤️ our customers and want to give them the best! <br />
            <br />
            Because our items are so unique and we understand many cannot be found anywhere else, we allow customers to make offers and negotiate on all of our items.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Presentation;
