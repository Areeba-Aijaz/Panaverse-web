import { Box, Image, Text, Flex, LinkBox , Heading , Button } from "@chakra-ui/react";
// import metaverse from '../assets/metaverse4.jpg';
// import img5 from '../assets/metaverse.jpg';
import Logo from '../assets/logo.png';
// import metaworld from '../assets/metaworld.jpg';
// import metaglass from '../assets/metaverse5.jpg'
// import wallpaper from '../assets/wallpaper.jpg'
import bgImage1 from "../assets/metaverse4.jpg";
import bgImage2 from "../assets/metaverse4.jpg";
import syllabus from '../assets/syllabus.png'
import arrow from '../assets/up-arrow.png'
import groupimg from '../assets/panaverseteachers.jpg'
import click from '../assets/tap.png'



function HomePage() {
  return (
    <Box
      // bgImage={[`url(${bgImage1})`, `url(${bgImage2})`] }
      // bgPosition="center"
      // bgRepeat="no-repeat"
      // bgSize="cover"
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
      // height="100vh"
      
    >
      {/* MAIN HEADING BOX */}
      <Box maxW="1200px" mx="auto" py="6rem" px={{ base: "1rem", md: "2rem" }} textAlign='center' w='100%'>
           <Text fontSize="7xl" fontWeight="bold" color={'white'} mb="1rem"  textShadow= '5px 5px 7px #4A5568'>
           Certified Web 3.0 and  Metaverse Developer
           </Text>
           <Text fontSize="xl" color={'whiteAlpha.700'} mb="2rem" textShadow= '5px 5px 5px #4A5568'>
           Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users        </Text>
       </Box>
     {/* SYLLABUS BOX */}
      <Box 
      display={'flex'}
      as = 'i'
      >
          <Box
            m='50px'
            >
              <Image 
              src={Logo} 
              />
          </Box>

          <Box 
          p='5px'
          m='50px'
          >
              <Text 
              fontSize="3xl"
              as='b'
               > 
               The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
               </Text>

                  <Box 
                  mt='20px'
                  >
                    <a href="./Syllabus">
                  <Button 
                  background='cyan.400'
                  boxShadow='5px 5px 5px #4A5568'
                  >
                    SEE  ROADMAP FOR STUDENTS 
                    <Image src={syllabus} boxSize='30px'/>
                    <Image src={arrow} boxSize='30px'/>
                    </Button>
                    </a>
                  </Box>

          </Box>

      </Box>

    {/*PROGRAAM K SHURKA K LY NATIJA */}
      <Box 
      p={'15px'}
      m='15px'
      textAlign={'center'}
    
      >
          <Heading
           as={'u'}>The Outcome for Participants of the Program</Heading>
          <Text 
          fontSize={'2xl'}
          p='5px'
          pb='10px'
          mb='10px'
          mt='5px'
          >
                The graduates of this program will own products 
                (Full-Stack App Templates, AR and VR Experiences, and APIs)
                that are marketed globally by the Panaverse DAO and, if they
                like, will also be able to start off by offering services at
                a rate of $50 per hour ($96,000 per year). This would give Pakistani
                professionals and students a fantastic opportunity to better their 
                financial situation while also giving the economy
                a much-needed boost by expanding software exports.
             </Text>
          <Box>
                <Button  
                    boxShadow='7px 7px 7px #4A5568'
                    p={'15px'}
                    w='55%'
                    as = 'b'
                    m='5px'
                    >
                    <a href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms">
                    Top 5 ‘Metaverse’ jobs that will rule the future of tech industry
                    </a>
                </Button>

                <br />

                <Button 
                    boxShadow='7px 7px 7px #4A5568'
                    p={'15px'}
                    w='55%'
                    as = 'b'
                    m='5px'
                    > 
                    <a href="https://web3.career/web3-salaries/blockchain-developer">Blockchain Developer Salary - Jun 2022
                    </a> 
                </Button> 
                
                 <br />

                <Button   
                    boxShadow='7px 7px 7px #4A5568'
                    p={'15px'}
                    w='55%'
                    as = 'b'
                    m='5px'
                    > 
                    <a href= "https://thedefiant.io/web3-soaring-salaries">Web3 Salaries Soar to $750,000 for Rank-and-File Devs
                    </a>
                </Button> 
                
                 <br />

                <Button 
                    boxShadow='7px 7px 7px #4A5568'
                    p={'15px'}
                    w='55%'
                    as = 'b'
                    m='5px'
                    > 
                    <a href="https://newzoo.com/resources/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022">The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters
                    </a>
                </Button>  
                
                <br />

             <Button 
                boxShadow='7px 7px 7px #4A5568'
                p={'15px'}
                w='55%'
                as = 'b'
                m='5px'
                >
                <a href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/">How To Become Metaverse Developer: Scope, Skills, and Salary
               </a>
             </Button>
      </Box>
           
              
             
       </Box>
      
{/* ABOUT BOX */}
          <Box 
          display='flex'
          justifyContent='center'
          alignItems='center'
          p='50px'>
            <Box 
            alignItems={'center'}
            as = 'u'>
                <Heading
                textAlign='center'
                >
                 PANAVERSE TEAM
                <Image src={groupimg} w='800px' mt='20px'/>
                </Heading>
            </Box>
            <Box
            display={'flex'}
            justifyContent='center'
            >  <a href="./About">
               <Button 
                background={'darkcyan'} 
                p='50px'
                textAlign='center'
                m='50px'
                boxShadow='7px 7px 7px #4A5568'
                fontSize="xl"
                >
                   Click here to learn <br /> about the brilliant team <br /> of the program
                   <Image src={click} boxSize='30px'/>
                </Button>
                </a>
            </Box>
          </Box> 
          
      
    </Box>
    
  );
};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //  <Box 
    // pos='relative'
    // h="400px"
    // bg='rgba(255,0,0,0.1)'
    // _before={{
    //   content:"'hello'",
    //   bgImage:
    //   "url(https://itinfra.datwyler.com/wp-content/uploads/2022/08/News_2022_08_Metaverse.jpg)",
    //   bgSize:'cover',
    //   pos:'absolute',
    //   top:0,
    //   left:0,
    //   right:0,
    //   bottom:0,
    //   opacity:0.9
    //   zIndex='-1'
    // }} >
          {/* <Box
          bgImage={metaverse}
          bgRepeat='no-repeat'
          bgAttachment='fixed'
          bgSize='cover'
          >
          </Box> */}
      
          // <Box maxW="1200px" mx="auto" py="6rem" px={{ base: "1rem", md: "2rem" }}>
          //   <Text fontSize="5xl" fontWeight="bold" color={'whatsapp.900'} mb="1rem">
          //   Certified Web 3.0 and  Metaverse Developer
          //   </Text>
          //   <Text fontSize="xl" color="white" mb="2rem">
          //   Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users        </Text>
          // </Box>
      //     <Text fontSize={["4xl", "5xl", "6xl"]} fontWeight="bold" color="white">
      // Certified Web 3.0 and  Metaverse Developer      </Text>
          
          // <Box>
          //     <Box w={{ base: "100%", md: "30%" }} mb="2rem">
          //       <Image src={metaglass} alt="Paragraph 1 Image" borderRadius="md" back />
          //       <Text fontSize="lg" color="white" mt="1rem">
          //           The metaverse is a virtual universe that is created by the
          //           convergence of physical and virtual reality. It is a collective
          //           virtual shared space where users can engage in a variety of
          //           activities, including socializing, gaming, shopping, and more.
          //           In the metaverse, users are represented by digital avatars 
          //           that can interact with each other and the environment. The
          //           concept of the metaverse has gained significant attention 
          //           in recent years due to advancements in technology and the 
          //           growing popularity of virtual reality and online gaming. 
          //           Some experts believe that the metaverse will become a major
          //           part of the internet and could even replace the internet as we know it today.
          //       </Text>
          //     </Box>
          //     <Box w={{ base: "100%", md: "30%" }} mb="2rem"  bg="gray.1000" >
          //       <Image src={metaworld} alt="Paragraph 2 Image" borderRadius="md" filter={'hue-rotate(-100deg)'}/>
          //       <Text fontSize="lg" color="white" mt="1rem">
          //           The internet has been one of the most significant
          //           technological advancements in human history, and it
          //           continues to evolve with the introduction of new 
          //           technologies like Web3, 3D Metaverse, AI, IoT, Cloud,
          //           and Edge computing. The Metaverse is a future internet
          //           vision that uses these technologies to create a virtual
          //           world that is decentralized, immersive, and interactive.
          //           The Metaverse will enable people to experience a new kind
          //           of internet where they can interact with each other in a 
          //           three-dimensional space using virtual and augmented reality,
          //           artificial intelligence, blockchain, cloud computing, voice 
          //           computing, and other cutting-edge technologies.

          //           According to a research paper by Citi, the Metaverse 
          //           economy could have a total addressable market of up to
          //           $13 trillion and five billion people by 2030. This means
          //           that the Metaverse has the potential to become a significant
          //           part of our daily lives and have a massive impact on the global economy.
          //       </Text>
          //     </Box>
          //     <Box w={{ base: "100%", md: "30%" }} mb="2rem">
          //       <Image src={Logo} alt="Paragraph 3 Image" borderRadius="md" />
          //       <Text fontSize="lg" color="white" mt="1rem">
          //           Overall, learning Web3 can provide students with
          //           a deeper understanding of emerging technologies and
          //           their potential to transform various industries. It 
          //           can also equip them with valuable skills and perspectives
          //           that can lead to exciting career opportunities and 
          //           contribute to a more decentralized and equitable future.
          //       </Text>
          //     </Box>
          // </Box>

          // <Box
          // as = 'i'
          //  >
          // <Image src={wallpaper} borderRadius="md" back />
          // <ul>
          //       <Heading
          //       as='u' 
          //       >
          //       <li>  New opportunities for innovation</li>
          //       </Heading>
          //       <li> Web3 is a rapidly growing field that is still in
          //       its early stages. This presents students with
          //       opportunities to innovate and create new applications
          //       and solutions that can solve real-world problems. </li>

          //       <Heading
          //       as='u' 
          //       >
          //       <li> Decentralization</li>
          //       </Heading>
          //       <li>
          //       Web3 technologies are built on decentralized 
          //       networks such as blockchain, which can provide greater
          //       security and transparency compared to traditional centralized 
          //       systems. By learning about Web3, students can understand the benefits
          //       of decentralization and how it can be applied to various industries. 
          //       </li>

          //       <Heading
          //       as='u' 
          //       > 
          //       <li> Career opportunities</li>
          //       </Heading>
          //       <li>
          //       As Web3 technologies become more widespread,
          //       there will be an increasing demand for developers and professionals
          //       with expertise in this field. By learning Web3, students can acquire
          //       valuable skills that can lead to exciting career opportunities in the future.
          //       </li>

          //       <Heading
          //       as='u' 
          //       > 
          //       <li>  Interdisciplinary approach</li> 
          //       </Heading>
          //       <li>
          //       Web3 combines various disciplines such as
          //       computer science, cryptography, economics, and game theory.
          //       By learning Web3, students can develop an interdisciplinary 
          //       approach to problem-solving, which can be applied to other fields
          //       as well.
          //       </li>


          //       <Heading
          //       as='u' 
          //       > 
          //       <li> Empowerment</li>
          //       </Heading>
          //       <li>
          //       Web3 technologies are designed to give more control and
          //       ownership to users, which can empower individuals and communities.
          //       By learning about Web3, students can understand the potential for
          //       decentralization and how it can promote greater autonomy and self-determination.
          //       </li>

          // </ul>
          // </Box>

          // <Image src={wallpaper} w={'full'} filter="blur(50px)"  />

//     </Box>
//   );
// }

export default HomePage;































































































// import { Box , Heading , Image } from '@chakra-ui/react';
// import React from 'react';
// import{ Carousel} from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import img1 from '../assets/1.jpg';
// import img2 from '../assets/metaglasshuman.jpg';
// import img3 from '../assets/3.jpg';
// import img4 from '../assets/metaglass.jpg';
// import img5 from '../assets/metaverse.jpg';
// import Logo from '../assets/logo.png';
// import metaverse from '../assets/metaverse4.jpg'


// const Home = () => {

//     return (
//   chakra me div ki jaga box use krngy
  //     <Box
  //       bgImage={metaverse}
  //       bgPosition="center"
  //       bgRepeat="no-repeat"
  //       bgSize="cover"
  //       height="100vh"
  //     > 
  //         <Box
  //           w='100%'
  //           height="100vh"
  //           display="flex"
  //           alignItems="center"
  //           >
  //             <Heading 
  //             fontSize='6xl'
  //             as = 'i'
  //             textColor={'whiteAlpha.700'} >
  //               Certified Web 3.0 and  Metaverse Developer
  //             </Heading>
  //         </Box>

  //      <Box 
  //      >
  //      <Image src={Logo}/>
  //      </Box> 


  //     </Box>
  //   );
  // };  
 
  
  

  



// export default Home;

// const headingOptions = {
//   pos: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%,-50%)',
//   textTransform: 'uppercase',
//   p: '4',
//   size: '4xl',
// };


  {/* <Box
        height="100vh" 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        >
        <Image src={Logo} />
        </Box> */}
        


{/* <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false} 
    showThumbs={false}
    showArrows={false}
    >

        <Box w={'full'} h={'100vh'} >
        <Image src={img1} alt="3D glasses"   /> 
        <Heading bgColor={'blackAlpha.900'} color={'white'}  {...headingOptions} >Watch The Future</Heading>
        </Box>
        
        <Box w={'full'} h={'100vh'} >
        <Image src={img2} alt="metaglasshuman"   /> 
        <Heading bgColor={'blackAlpha.900'} color={'white'}  {...headingOptions} >3D HEADSETS</Heading>
        </Box>
        
        <Box w={'full'} h={'100vh'} >
        <Image src={img3} alt="REMOTE CONTROL"   /> 
        <Heading bgColor={'blackAlpha.900'} color={'white'}  {...headingOptions} >REMOTE CONTROL</Heading>
        </Box>
        
        <Box w={'full'} h={'100vh'} >
        <Image src={img4} alt="METAGLASSES ROBOT"   /> 
        <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}  >METAVERSE ROBOT</Heading>
        </Box>
        
        <Box w={'full'} h={'100vh'} >
        <Image src={img5} alt="METAVERSE"   /> 
        <Heading bgColor={'blackAlpha.900'} color={'white'}  {...headingOptions} >METAVERSE</Heading>
        </Box>

    </Carousel> */}