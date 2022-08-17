//import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Avatar,
  Wrap,
  WrapItem, 
  Center,
  chakra

} from '@chakra-ui/react';
import { Link, Link as ReachLink } from 'react-router-dom';
import { motion, isValidMotionProp } from 'framer-motion';


const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});


const VistaPrincipal = () => {


  return (
    <>
      
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Proyecto final Desarrollo de Software Empresarial <br />
            <Text as={'span'}
              bgGradient='linear(to-l, #a14588, #FF0080)'
              bgClip='text'
              fontSize='6xl'
              fontWeight='extrabold'
            >
              Odoo módulo CRM
            </Text>
            
          </Heading>
          <Text color={'gray.500'}>
            El presente proyecto consume datos del modulo CRM de la aplicacion Odoo, se le aplica un metodo de clustering denominado K-means, para la agrupacion de clases de clientes los cuales se muestran en graficos para su posterior interpretacion.
          </Text>
          <Center>
            <Wrap>
              <WrapItem>
                  <Avatar name='Yasmin' src= 'https://lh3.googleusercontent.com/a-/AFdZucq0gBC_HuACo12FnHr1ii_wIFML9aIXqmnb5xLfJg=s96-c-rg-br100' />
              </WrapItem>

              <WrapItem>
                <Avatar name='Perca' src='https://lh3.googleusercontent.com/a-/AFdZucrdSTTKlN2Th0JULqWFE9W4iLHDuICtLUiMvurdFQ=s48-p' />
              </WrapItem>

              <WrapItem>
                  <Avatar name='Pocho' src='https://lh3.googleusercontent.com/a-/AFdZucq6_f2mE1bAmfHgnhJKFKX7j0nCE2VnleDjlfQC=s32-c' />
              </WrapItem>

              <WrapItem>
                  <Avatar name='Misa' src='https://lh3.googleusercontent.com/a-/AFdZucoMCy-kYHAIY6qpFWjOCtnQzLejZ46gN-j6Xdl-=s32-c' />
              </WrapItem>
            
            </Wrap>
          </Center>

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>


            <Link  to="/table">
              {/* <Button
                colorScheme={'#a14588'}
                bg={'#a14588'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: '#a14588',
                }}
                >
                Dale click
              </Button> */}
              <Container h="14vh" display="flex" alignItems="center" justifyContent="center">
                <ChakraBox
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  // @ts-ignore no problem in operation, although type error appears.
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  padding="2"
                  bgGradient="linear(to-l, #a14588, #611047)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100px"
                  height="100px"
                >
                  <Text as={'span'} color={'white'}>
                     Click
                  </Text>
                </ChakraBox>
              </Container>
            </Link>




            <Button variant={'link'} colorScheme={'purple'} size={'sm'} top={'60px'}>
              Leer más
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'80px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-140px'}
                top={'60px'}
                transform={'rotate(10deg)'}>
                Empecemos!
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
}

);
export default VistaPrincipal;