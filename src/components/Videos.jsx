import { Button, Heading, Stack, Text, VStack , Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://youtu.be/fKhY3mu8hx4',
    'https://youtu.be/EcMvrnGlZbY',
    'https://youtu.be/ZpQ0JwIkGh8',
    'https://youtu.be/CCkVwmgo4tI',
    'https://youtu.be/_OVnXw2ldog',
    'https://youtu.be/zIiX2p3HEQY',
    'https://youtu.be/uN6BwQfyGf8',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
      <Box>
        <Box 
        textAlign={'center'}
        p='10px' 
        as = 'u'>
        <Heading>PANAVERSE DAO</Heading>
        </Box>

        <Box pr='5px' m='10px'>
        <Stack direction={['column', 'row']} h={'100vh'}>
       <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        >
          
        </video>

         <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
           <Heading>Description:</Heading>
          <Text>
          Panaverse DAO's mission statement is to train Web
           3.0 and Metaverse Developers and to create products
            using these cutting-edge technologies.
          </Text> 
        </VStack> 
      </VStack> 
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
        </Box>


      </Box>
    );
  };















  
  export default Videos;
    

