import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
    Image
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineSend } from 'react-icons/ai';
  import phone from '../assets/telephone.png'
  
  const Footer = () => {
    return (
      <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading
              size="md"
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py="2">
              <Input
                placeholder="Enter Email Here..."
                border={'none'}
                borderRadius="none"
                outline={'none'}
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={20} />
              </Button>
              
            </HStack>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={'black'} href="https://www.piaic.org/">
              Admission website
              </a>
            </Button>
          </VStack>
  
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}>
            <Text>PIAIC Helpline  <br />+92-308-2220203 (WhatsApp as well)</Text>
         </VStack>
  
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              CONNECT US
            </Heading>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={'black'} href="https://www.youtube.com/@panaverse/streams">
                Youtube
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={'black'} href="https://discord.com/channels/790484092772548613/1025675608526684171">
                Discord
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={'black'} href="https://www.panaverse.co/"> 
                Phone
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={'black'} href="https://www.facebook.com/groups/panaverse">
                Facebook
              </a>
            </Button>

            <Button variant={'link'} colorScheme={'white'}>
              <a target={'black'} href="https://twitter.com/Panaverse_edu">
                Twitter
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  