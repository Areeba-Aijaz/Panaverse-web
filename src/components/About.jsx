import React from 'react';
import { Box, Center, Container, Heading, Image, Stack, Text,Button, VStack } from '@chakra-ui/react';
import sirzia from '../assets/sirzia.jpg';
import siradil from '../assets/siradil.jpg';
// import wallpaper from '../assets/wallpaper.jpg';
import Sirdaniyal from '../assets/sirdaniyal2.jpg'
import MissHira from '../assets/misshira2.jpeg'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'


const About = () => {
  return (
    <Box
    as = "i" 
    // color='black'
    >
    <Container 
    maxW={'container.xl'} 
    minH={'100vh'} 
    p="16"
    // bgGradient='linear(to-l, #CBD5E0, #A0AEC0)'
    // bgColor={isDark ? 'linear(to-l, #CBD5E0, #A0AEC0)' : 'linear(to-l,#9DECF9,#EDFDFD)'}


    >
    <Heading
      textTransform={'uppercase'}
      py="2"
      w={'fit-content'}
      borderBottom={'2px solid'}
      m="auto"
      // color='black'
      textShadow= '5px 5px 7px #4A5568'
      mb={'50px'}

    >
      PANAVERSE DAO TEAM
    </Heading>

    <Stack
      h="full"
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}
      boxShadow='dark-lg'
      mb={'50px'}
    >
     
      <Image src={sirzia} h={['40', '400']}  />

      <Text
        letterSpacing={'widest'}
        lineHeight={'190%'}
        p={['4', '16']}
        textAlign={'center'}
        as="u"
      >
         <Heading 
              textShadow= '5px 5px 7px #718096'

         >SIR ZIA KHAN</Heading>
        CEO of Panacloud, the worlds first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.
      </Text>
      <VStack w={'full'}> 
       
       <a href="#"> <Image src={linkedin} boxSize='30px' h={'30px'} w={'30px'} /> </a>
       <a href="#"> <Image src={github} boxSize='30px' h={'30px'} w={'30px'} /> </a>
       <a href="#"> <Image src={twitter} boxSize='30px' h={'30px'} w={'30px'} /> </a>
  
       
        </VStack>
    </Stack>

    <Stack
      h="full"
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}
      boxShadow='dark-lg'
      mb={'50px'}

    >
      <Image src={Sirdaniyal} h={['40', '400']}/>

      <Text
        letterSpacing={'widest'}
        lineHeight={'190%'}
        p={['4', '16']}
        textAlign={'center'}
        as="u"
      >
        <Heading 
         textShadow= '5px 5px 7px #718096'
        >SIR DANIYAL NAGORI</Heading>
        I am a Full-stack developer and DevOps Architect with certification in most cutting edge technologies of development and deployment of tools, apps and microservices. I am current in my certification for:Certified Kubernetes Application Developer , AWS Certified Developer,Coursera React Native Nano Degree.I have been fortunate to be able to architect solutions in as wide an array as Cloud Native, Voice Computing/Chatbot development, Web, Mobile, AI, and Blockchain.
      </Text>
      <VStack w={'full'}> 
       
       <a href="#"> <Image src={linkedin} boxSize='30px' h={'30px'} w={'30px'} /> </a>
       <a href="#"> <Image src={github} boxSize='30px' h={'30px'} w={'30px'} /> </a>
       <a href="#"> <Image src={twitter} boxSize='30px' h={'30px'} w={'30px'} /> </a>
  
       
        </VStack>
    </Stack>

    <Stack
      h="full"
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}
      boxShadow='dark-lg'
      mb={'50px'}

    >
       <Image src={siradil} h={['40', '400']} />


      <Text
        letterSpacing={'widest'}
        lineHeight={'190%'}
        p={['4', '16']}
        textAlign={'center'}
        as="u"
      >
        <Heading 
        textShadow= '5px 5px 7px #718096'
            >SIR ADIL ALTAF</Heading>
        I have been working in the software industry for over a decade in which I have accumulated a vast amount of knowledge and experience in all areas of the Full Stack SDLC including architecture and design, development, implementation, integration, and deployment. I’ve been developing internet-scale apps with MERN Stack and JAMstack technologies deployed on multi-cloud serverless and cloud-native platforms.
      </Text>
      <VStack w={'full'}> 
       
       <a href="#"> <Image src={linkedin} boxSize='30px' h={'30px'} w={'30px'} /> </a>
       <a href="#"> <Image src={github} boxSize='30px' h={'30px'} w={'30px'} /> </a>
       <a href="#"> <Image src={twitter} boxSize='30px' h={'30px'} w={'30px'} /> </a>
  
       
        </VStack>
    </Stack>

    <Stack
      h="full"
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}
      boxShadow='dark-lg'
      mb={'50px'}

    >
      <Image src={MissHira} h={['40', '400']} />

      <Text
        letterSpacing={'widest'}
        lineHeight={'190%'}
        p={['4', '16']}
        textAlign={'center'}
        as="u"
      >
        <Heading 
        textShadow= '5px 5px 7px #718096'
        >MISS HIRA KHAN</Heading>
        I am the Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing. The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. The mission is to train our workforce in the latest technologies and abuild a technology driven economy in both the domestic market as well as exports. I am a patron of the PIAIC program.
       
      </Text>
      
      
      <VStack
      w={'full'}> 
       
     <a href="#"> <Image src={linkedin} boxSize='30px' h={'30px'} w={'30px'} /> </a>
     <a href="#"> <Image src={github} boxSize='30px' h={'30px'} w={'30px'} /> </a>
     <a href="#"> <Image src={twitter} boxSize='30px' h={'30px'} w={'30px'} /> </a>
  
     
     
      </VStack>
    </Stack>
  </Container>
  </Box>
  )
}

export default About;
