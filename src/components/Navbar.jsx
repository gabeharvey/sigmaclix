/* eslint-disable react/no-unescaped-entities */
import {
    Box,
    Flex,
    Spacer,
    Link as ChakraLink,
    IconButton,
    useDisclosure,
    Text,
    Image
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../App.css';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const menuRef = useRef();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1240);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShowCloseIcon(true), 200);
        } else {
            setShowCloseIcon(false);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const menuVariants = {
        hidden: { x: '100%' },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 13,
                mass: 0.9,
                bounce: 0.25,
                delayChildren: 0.3,
                staggerChildren: 0.3,
            },
        },
        exit: {
            x: '100%',
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <Box position="sticky" top="0" zIndex="999" bg="transparent">
            <Box
                bg="#00B3B3"
                pb="2rem"
                pt="2.5rem"
                px="2rem"
                fontFamily="'Bangers', system-ui"
                position="relative"
                zIndex="2"
                boxShadow="0 4px 15px rgba(0,0,0,0.3)"
                borderBottomLeftRadius="15px" 
                borderBottomRightRadius="15px" 
            >
                <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
                    <Flex
                        flexDirection="column"
                        alignItems="center" 
                    >
                        <Box
                            maxW={{ base: '220px', md: '260px', lg: '340px' }}
                            w="100%"
                        >
                            <Image
                                src="/sigmaclix-logo-alt.png"
                                alt="Logo"
                                w="100%"
                                h="auto"
                            />
                        </Box>
                        <Text
                            mt="0.5rem"
                            fontFamily="'Bangers', system-ui"
                            fontSize={{ base: '2.5rem', md: '3rem', lg: '3.5rem' }}
                            fontWeight="md"
                            textAlign="center"
                            lineHeight="1.2"
                            color="#FFD500"
                            textShadow="2px 2px 4px rgba(255, 255, 255, 0.7)" 
                            style={{
                                WebkitTextStroke: "1px white", 
                            }}
                        >
                            Sigma Clix
                        </Text>
                    <Text
                    mt="0.25rem"
                    fontFamily="'Luckiest Guy', system-ui"
                    fontSize={{ base: '.8rem', md: '1rem', lg: '1.2rem' }}
                    fontWeight="bold"
                    textAlign="center"
                    lineHeight="1.2"
                    color="#FF69B4"
                    letterSpacing="0.5px"
                    textShadow="
                        -1px -1px 0 #fff,
                        1px -1px 0 #fff,
                        -1px  1px 0 #fff,
                        1px  1px 0 #fff
                    "
                    >
                    More Than Hits - It's Sigma.
                    </Text>
                    </Flex>
                    <Spacer />
                    <IconButton
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    icon={
                        showCloseIcon ? (
                        <motion.div
                            whileHover={{ scale: 1.2, color: '#C0C0C0' }}
                            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                            transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                            }}
                            style={{ color: '#E5E4E2' }}
                        >
                            <CloseIcon />
                        </motion.div>
                        ) : (
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            style={{
                                fontSize: "2.2rem",
                                fontFamily: "'Bangers', system-ui",
                                fontWeight: "bold",
                                color: "#FF69B4",
                                textShadow: `
                                    -1px -1px 0 #FFFFFF,  
                                    1px -1px 0 #FFFFFF,
                                    -1px  1px 0 #FFFFFF,
                                    1px  1px 0 #FFFFFF
                                `
                            }}
                        >
                            <Box as="span">Σ</Box>
                        </motion.div>
                        )
                    }
                    display={isMobile ? 'block' : 'none'}
                    onClick={isOpen ? onClose : onOpen}
                    variant="unstyled"
                    fontSize="30px"
                    _focus={{ boxShadow: 'none' }}
                    mt="20px"
                    mb="20px"
                    />
                    <Flex
                    as="ul"
                    display={isMobile ? 'none' : 'flex'}
                    listStyleType="none"
                    ml="auto"
                    alignItems="center"
                    gap="2rem"
                    flex="1"
                    justifyContent="space-evenly"
                    whiteSpace="nowrap"
                    >
                    {['ABOUT', 'SOCIAL', 'MENU', 'CONTACT'].map((text, index) => (
                        <ChakraLink
                        key={index}
                        as={ScrollLink}
                        to={text.replace(' ', '-').toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        fontSize="xl"
                        fontWeight="extrabold"
                        fontFamily="'Bangers', system-ui"
                        color="#FF69B4"
                        position="relative"
                        textShadow={`
                            -1px -1px 0 #FFF,
                            1px -1px 0 #FFF,
                            -1px  1px 0 #FFF,
                            1px  1px 0 #FFF,
                            0px  0px 6px #FFF
                        `}
                        _hover={{
                            transform: 'scale(1.05)',
                            transition: 'transform 0.2s',
                            color: '#FF69B4',
                        }}
                        style={{ cursor: 'pointer' }}
                        >
                        {text}
                        </ChakraLink>
                    ))}
                    </Flex>
                    {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        style={{ position: 'fixed', top: 0, right: 0, width: '70%', height: '100vh', zIndex: 10 }}
                    >
                    <Box
                        ref={menuRef}
                        bg="#FF69B4"
                        p="1rem"
                        borderTopLeftRadius="15px"
                        borderBottomLeftRadius="15px"
                        color="#00B3B3" 
                        height="100%"
                        boxShadow="0 8px 15px rgba(0, 0, 0, 0.6)"
                    >
                            <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                                <Box maxW={{ base: '100px', md: '120px', lg: '140px' }}>
                                    <Image
                                        src="/sigmaclix-logo-alt.png"
                                        alt="Logo"
                                        w="100%"
                                        h="auto"
                                    />
                                </Box>
                                <IconButton
                                    icon={
                                        <CloseIcon
                                            w={7}
                                            h={7}
                                            style={{
                                                filter: 'drop-shadow(2px 2px 0 #FFFFFF) drop-shadow(-1px -1px 0 #FFFFFF)'
                                            }}
                                        />
                                    }
                                    marginRight={10}
                                    color="#FFD500"
                                    aria-label="Close Menu"
                                    variant="outline"
                                    onClick={onClose}
                                    bgColor="transparent"
                                    _focus={{ boxShadow: 'none' }}
                                    _hover={{ bg: 'transparent', color: '#FFD500' }}
                                    size="md"
                                    border="transparent"
                                />
                            </Flex>
                            <Flex as="ul" flexDirection="column" alignItems="flex-start" gap="1rem" mt="1rem">
                            {['ABOUT', 'SOCIAL', 'MENU', 'CONTACT'].map((text, index) => (
                                <ChakraLink
                                key={index}
                                as={ScrollLink}
                                to={text.replace(' ', '-').toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                fontSize="2xl"
                                fontFamily="'Bangers', system-ui"
                                fontWeight="bold"
                                color="#FFD500"
                                _hover={{
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.2s',
                                    color: "#FFD500",
                                }}
                                style={{
                                    cursor: 'pointer',
                                    textShadow: "0 2px 4px rgba(255,255,255,0.9)", 
                                    WebkitTextStroke: "1px white", 
                                    WebkitTextFillColor: "#FFD500", 
                                }}
                                >
                                {text}
                                </ChakraLink>
                            ))}
                            </Flex>
                        </Box>
                    </motion.div>
                    )}
                </Flex>
            </Box>
        </Box>
    );
};

export default Navbar;
