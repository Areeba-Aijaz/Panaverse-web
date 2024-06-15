import React from 'react';
// FOR SIDE NAVBAR... IN CHAKRA LANGUAGE CALL DRAWER
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Stack,
    VStack,
    HStack
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 

// IMPORTIG FOR ICONS
import {BiMenuAltLeft} from 'react-icons/bi' 

const Header = () => {
// THIS IS HOOK
const { isOpen, onOpen, onClose } =  useDisclosure()   

 return(
    // fregments MEANS EMPTY BRACKETS
        <>
        <Button  
        pos={'fixed'} 
        top={'4'} 
        left={'4'} 
        colorScheme={"teal"} 
        p={'0'} 
        h={'10'} 
        w={'10'}
        borderRadius={"full"}
        onClick={onOpen}
        >
            {/* THIS IS SIDEBAR BUTTON ICON */}
             <BiMenuAltLeft   size={'20'} />
        </Button >
{/* THIS IS SIDEBAR WITH. ISOPEN MEAN JB CLICK HO TO SODEBAR OPN HO.
 PLACEMENT MEANS KIS SIDE SE OPN HO.ONCLOSE MEANS JB KISI OR SIDE OPN O TO CLOSE HOJY  */}
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
           <DrawerOverlay />
           <DrawerContent>
            {/* THIS IS CROSS BUTTON ICON */}
            <DrawerCloseButton />
           <DrawerHeader> Panaverse DAO</DrawerHeader>

            {/* <Stack> is lye usehota h k asa div h jis ki display bydefault flex h.flex direction set kr skty hen row or column  */}
            {/* VStack)aesa div jis ki direction already vertical ho */}
            <DrawerBody>
        <VStack alignItems={'flex-start'}>
        <Button onClick={onClose} variant={'ghost'} colorScheme={"teal"}>
            <Link to={'/'}>Home</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={"teal"}>
            <Link to={'/videos'}>Videos </Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={"teal"}>
            <Link to={'/Syllabus'}>Syllabus </Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme={"teal"}>
            <Link to={'/About'}>About </Link>
        </Button>
        </VStack>
        <HStack 
        pos={'absolute'}
        bottom={'10'}
        left={'0'}
        justifyContent={'space-evenly'}
        w={'full'}
        >
          <Button onClick={onClose} colorScheme={"teal"} variant={'outline'}>
            <Link to={'/signup'}> Sign Up </Link>
          </Button>
          <Button onClick={onClose} colorScheme={"teal"}>
            <Link to={'/login'}> Log In </Link>
          </Button> 
        </HStack>
        </DrawerBody>
           </DrawerContent>
        </Drawer>
       
        </>

 )
};

export default Header;