import {
   
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
    Image,
    
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  import Logo from '../assets/logo.png'

  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} >
        <form >
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading as='u' textAlign={'center'}>PANAVERSE DAO</Heading>
            {/* <Avatar alignSelf={'center'} boxSize={'32'} /> */}
            <Image src={Logo} h='200px'/>

            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'}>
              Sign Up
            </Button>
           
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </Text>
          
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;
  