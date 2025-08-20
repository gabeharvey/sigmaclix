import { Box, Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      fontFamily="'Bangers', system-ui"
      bg="#FF69B4"
      mt="auto"
      position="relative"
      zIndex={1}
      pt="3rem"
      pb="2rem"
      px="2rem"
      borderTopRightRadius="15px"
      borderTopLeftRadius="15px"
      overflow="hidden"
      boxShadow="0 -4px 10px rgba(0,0,0,0.3)"
    >
      <Flex
        justify="center"
        alignItems="center"
        position="relative"
        zIndex={3}
        textAlign="center"
        flexWrap="wrap"
      >
        <Text
            fontFamily="'Bangers', system-ui"
            fontSize={['2xl', '3xl']}
            fontWeight="bold"
            letterSpacing="wider"
            whiteSpace={{ base: 'normal', md: 'nowrap' }}
            color="#FFD500"
            textShadow="2px 2px 4px rgba(255, 255, 255, 0.7)" 
            style={{
                WebkitTextStroke: "1px white", 
            }}
        >
            ©2025{' '}
            <Box
                as="span"
                fontFamily="'Bangers', system-ui"
                color="#FFD500"
                display="inline"
                textShadow="2px 2px 4px rgba(255, 255, 255, 0.7)"
                style={{ WebkitTextStroke: "1px white" }}
            >
                Sigma Clix
            </Box>
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
