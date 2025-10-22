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
        direction="column"
        justify="center"
        alignItems="center"
        position="relative"
        zIndex={3}
        textAlign="center"
        flexWrap="wrap"
      >
        <Text
          fontSize={['2xl', '3xl']}
          fontWeight="bold"
          letterSpacing="wider"
          whiteSpace={{ base: 'normal', md: 'nowrap' }}
          color="#FFD500"
          textShadow="2px 2px 4px rgba(255, 255, 255, 0.7)"
          style={{ WebkitTextStroke: '1px white' }}
        >
          ©2025{' '}
          <Box
            as="span"
            color="#FFD500"
            display="inline"
            textShadow="2px 2px 4px rgba(255, 255, 255, 0.7)"
            style={{ WebkitTextStroke: '1px white' }}
          >
            Sigma Clix LLC
          </Box>
        </Text>

        {/* Company Address */}
        <Text
                            mt="0.25rem"
                            fontFamily="'Luckiest Guy', system-ui"
                            fontSize={{ base: '.9rem', md: '1.05rem', lg: '1.2rem' }} 
                            fontWeight="bold"
                            textAlign="center"
                            lineHeight="1.2"
                            color="#00B3B3"
                            letterSpacing="0.5px"
                            textShadow="
                                -1px -1px 0 #fff,
                                1px -1px 0 #fff,
                                -1px  1px 0 #fff,
                                1px  1px 0 #fff
                            "
        >
          Austin, TX
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
