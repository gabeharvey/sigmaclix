import { Box, Flex, Text, Icon, Link } from '@chakra-ui/react';
import { FaInstagram, FaTiktok, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import '../App.css';

const SocialMedia = () => {
  const platforms = [
    { id: 1, name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/sigma_clix/', color: '#E1306C' },
    { id: 2, name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@sigma_clix', color: '#69C9D0' },
    { id: 3, name: 'Snapchat', icon: FaSnapchatGhost, url: 'https://www.snapchat.com', color: '#FFFFFF' },
    { id: 4, name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@sigma_clix_live', color: '#FF0000' },
  ];

  return (
    <Box
      id="social"
      minH="40vh"
      bg="#FFD500"
      px={{ base: '1rem', md: '3rem', lg: '5rem' }}
      py="3rem"
      fontFamily="'Bangers', system-ui"
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
        Get Drops
      </Text>

      <Flex justify="center" gap={{ base: '2rem', md: '3rem' }}>
        {platforms.map((platform) => (
          <Link
            key={platform.id}
            href={platform.url}
            isExternal
            _hover={{ textDecoration: 'none' }}
          >
            <Icon
              as={platform.icon}
              w={{ base: '50px', md: '60px' }}
              h={{ base: '50px', md: '60px' }}
              color={platform.color}
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.3)' }}
            />
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default SocialMedia;
