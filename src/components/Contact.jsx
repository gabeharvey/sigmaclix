import { useState, useRef } from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../App.css';

const MotionBox = motion(Box);

const Contact = () => {
  const [showText, setShowText] = useState(false);
  const audioRef = useRef(null);

  const text =
    "Got questions, trades, or just wanna talk rare pulls? Reach out to Sigma Clix at support@sigmaclix.com or hit us up on socials. We’re always down to chat collectibles!";

  const words = text.split(" ");

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setShowText(true);
  };

  return (
    <Box
      id="contact"
      minH="40vh"
      bg="#FFD500"
      px={{ base: '1rem', md: '3rem', lg: '5rem' }}
      py="3rem"
      fontFamily="'Luckiest Guy', system-ui"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {!showText ? (
        <Button
          onClick={handleClick}
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
            transform: "scale(1.1) rotate(1deg)",
            boxShadow:
              "0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FF69B4",
            bg: "#FFFFFF",
          }}
          transition="all 0.3s ease-in-out"
        >
          💌 Contact Us! 💌
        </Button>
      ) : (
        <Text
          as="div"
          fontSize={{ base: "1.2rem", md: "1.6rem", lg: "2rem" }}
          maxW="800px"
          color="#FF69B4"
          lineHeight="1.6"
          textShadow="
            -2px -2px 0 #FFFFFF,  
             2px -2px 0 #FFFFFF,
            -2px  2px 0 #FFFFFF,
             2px  2px 0 #FFFFFF
          "
        >
          {words.map((word, index) => (
            <MotionBox
              key={index}
              display="inline-block"
              mr="0.4rem"
              initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{
                delay: index * 0.08,
                type: "spring",
                stiffness: 200,
              }}
            >
              {word}
            </MotionBox>
          ))}
          <Box mt="2rem" fontSize={{ base: "1rem", md: "1.3rem" }}>
            <Link
              href="mailto:support@sigmaclix.com"
              color="#FF69B4"
              fontWeight="bold"
              textDecoration="underline"
              _hover={{ color: "#ff1493" }}
            >
              support@sigmaclix.com
            </Link>
          </Box>
        </Text>
      )}
      <audio ref={audioRef} src="/bubble-pop.mp3" preload="auto" />
    </Box>
  );
};

export default Contact;
