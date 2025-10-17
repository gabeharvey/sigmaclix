import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Cards = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});

  const flipSound = new Audio('/card-flip.mp3');
  flipSound.volume = 0.7;

  const powerUpSound = new Audio('/power-up.mp3'); 
  powerUpSound.volume = 0.7;

  const moneySound = new Audio('/coin.mp3'); 
  moneySound.volume = 0.7;

  const handleFlip = (id) => {
    flipSound.currentTime = 0;
    flipSound.play().catch((err) => console.warn('Sound play failed:', err));

    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleHomeClick = () => {
    powerUpSound.currentTime = 0;
    powerUpSound.play().catch((err) => console.warn('Sound play failed:', err));
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurchase = (cardName) => {
    moneySound.currentTime = 0; // play money sound
    moneySound.play().catch((err) => console.warn('Sound play failed:', err));
    alert(`Purchased: ${cardName}`);
  };

  const cards = [
    { id: 1, name: '2025 Marvel Topps Chrome Storm 1/1 🔥SLAY🔥', image: '/storm-super-2025.jpg', price: '$80,000', description: 'An ultra-rare Storm card, capturing the ultimate heroic energy.' },
    { id: 2, name: '2025 Marvel Topps Chrome Web-Head 1st Appearance 1/5 🌶️SPICY🌶️', image: '/web-head-5.jpg', price: '$2,500', description: 'Web-Head swings into collectors’ hearts with style and flair.' },
    { id: 3, name: '2025 Marvel Topps Chrome Spider-Girl 1st Appearance 1/5 ✨LIT✨', image: '/spider-girl-5.jpg', price: '$4,000', description: 'Spider-Girl shines bright as the next iconic hero of Marvel.' },
    { id: 4, name: '2018 Topps Heritage Shohei Ohtani RC Auto', image: '/ohtani-rc.jpg', price: '$20,000', description: 'Ohtani’s legendary rookie card delivers epic collector value.' },
    { id: 5, name: '2017 Gypsy Queen Aaron Judge RC 1/1', image: '/judge-rc-1.jpg', price: '$10,000', description: 'Aaron Judge stands tall on this unique collector’s masterpiece.' },
    { id: 6, name: '2016 Panini Prizm Dak Prescott RC 2/5', image: '/dak-rc-5.jpg', price: '$25,000', description: 'Dak Prescott’s rare rookie shines with unbeatable style.' },
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

      <Flex wrap="wrap" justify="center" gap={{ base: '1rem', md: '2rem' }}>
        {cards.map((card) => {
          const isFlipped = flippedCards[card.id];

          return (
            <Box
              key={card.id}
              w={{ base: '150px', md: '200px', lg: '220px' }}
              h="300px"
              perspective="1000px"
              cursor="pointer"
              onClick={() => handleFlip(card.id)}
            >
              <Box
                w="100%"
                h="100%"
                position="relative"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}
                transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
              >
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  borderRadius="15px"
                  boxShadow="0 6px 15px rgba(0,0,0,0.2)"
                  style={{ backfaceVisibility: 'hidden' }}
                  overflow="hidden"
                >
                  <Image
                    src={card.image}
                    alt={card.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  borderRadius="15px"
                  bg="#FF69B4"
                  color="#FFFFFF"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="1rem"
                  boxShadow="0 6px 15px rgba(0,0,0,0.3)"
                  style={{ backfaceVisibility: 'hidden' }}
                  transform="rotateY(180deg)"
                  textAlign="center"
                >
                  <Text fontSize={{ base: '0.9rem', md: '1rem' }} fontWeight="bold" mb="0.5rem">
                    {card.name}
                  </Text>
                  <Text fontSize={{ base: '0.85rem', md: '0.95rem' }} mb="0.5rem">
                    {card.description}
                  </Text>
                  <Text fontSize={{ base: '0.9rem', md: '1rem' }} fontWeight="bold" color="#FFD700" mb="1rem">
                    {card.price}
                  </Text>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePurchase(card.name);
                    }}
                    fontFamily="'Bangers', system-ui"
                    fontSize={{ base: '1rem', md: '1.1rem' }}
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
                    ADD TO CART
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
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
    </Box>
  );
};

export default Cards;
