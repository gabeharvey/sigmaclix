import { useState, useRef } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "../App.css";

const MotionBox = motion(Box);

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const audioRef = useRef(null);
  const formRef = useRef(null);
  const toast = useToast();

  const handleClick = () => {
    if (audioRef.current) audioRef.current.play();
    setShowForm(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chnxs9o",
        "template_9lth3qc",
        formRef.current,
        "OsmvrvTNk66UEd-sC"
      )
      .then(
        () => {
          toast({
            duration: 4000,
            isClosable: true,
            status: "success",
            position: "bottom",
            render: () => (
              <Box
                p="12px 16px"
                bg="green.500"
                color="white"
                borderRadius="md"
                fontFamily="'Bangers', system-ui"
                textAlign="center"
                boxShadow="lg"
              >
                <Text fontWeight="bold">Message Received!</Text>
                <Text>Sigma Clix will get back to you soon.</Text>
              </Box>
            ),
          });
          formRef.current.reset();
        },
        (error) => {
          toast({
            duration: 4000,
            isClosable: true,
            status: "error",
            position: "bottom",
            render: () => (
              <Box
                p="12px 16px"
                bg="red.500"
                color="white"
                borderRadius="md"
                fontFamily="'Bangers', system-ui"
                textAlign="center"
                boxShadow="lg"
              >
                <Text fontWeight="bold">Failed to send</Text>
                <Text>Please try again later.</Text>
              </Box>
            ),
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <Box
      id="contact"
      minH="60vh"
      bg="#FFD500"
      px={{ base: "1rem", md: "3rem", lg: "5rem" }}
      py="3rem"
      fontFamily="'Luckiest Guy', system-ui"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {!showForm ? (
<Button
  onClick={handleClick}
  fontFamily="'Bangers', system-ui"
  fontSize={{ base: "1.8rem", md: "2.2rem" }}
  bg="#FFFFFF"
  color="#FF69B4"
  px="2.6rem"
  py="1.5rem"
  borderRadius="25px 10px 25px 15px"
  border="3px solid #FF69B4"
  boxShadow="0 0 0 4px #FFFFFF, 0 0 0 6px #FF69B4"
  _hover={{
    transform: "scale(1.1) rotate(1deg)",
    boxShadow: "0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FF69B4",
    bg: "#FFFFFF",
  }}
  transition="all 0.3s ease-in-out"
>
  ❤️ Contact Us ❤️
</Button>

      ) : (
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          maxW="600px"
          w="100%"
          mt="2rem"
          bg="#FF69B4" 
          border="4px solid #FFFFFF" 
          borderRadius="xl"
          p="2rem"
          boxShadow="0 0 0 6px #FFFFFF, 0 0 0 8px #FF69B4"
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <FormControl mb={4}>
              <FormLabel fontFamily="'Bangers', system-ui" color="#FFFFFF">
                Your Name
              </FormLabel>
              <Input
                name="name"
                placeholder="Your Name"
                bg="white"
                border="2px solid #FFFFFF"
                _focus={{ borderColor: "#FFFFFF" }}
                required
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel fontFamily="'Bangers', system-ui" color="#FFFFFF">
                Your Email
              </FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                bg="white"
                border="2px solid #FFFFFF"
                _focus={{ borderColor: "#FFFFFF" }}
                required
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel fontFamily="'Bangers', system-ui" color="#FFFFFF">
                Message
              </FormLabel>
              <Textarea
                name="message"
                placeholder="Write your message..."
                bg="white"
                border="2px solid #FFFFFF"
                _focus={{ borderColor: "#FFFFFF" }}
                required
              />
            </FormControl>

            <Button
              type="submit"
              mt={4}
              fontFamily="'Bangers', system-ui"
              bg="#FFFFFF"
              color="#FF69B4"
              px="3rem"
              py="1.2rem"
              borderRadius="10px"
              boxShadow="0 0 0 4px #FF69B4, 0 0 0 6px #FFFFFF"
              _hover={{ transform: "scale(1.05)", bg: "#f8f8f8" }}
            >
              Send Message
            </Button>
          </form>
        </MotionBox>
      )}
      <audio ref={audioRef} src="/bubble-pop.mp3" preload="auto" />
    </Box>
  );
};

export default Contact;
