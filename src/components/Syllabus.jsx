import { Box,
        Text, 
        Button,
        Heading,
        Accordion,
        Image,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon, } from '@chakra-ui/react';
import React from 'react';
import arrow from '../assets/arrow.png'
import github2 from '../assets/github2.png'
import bok2 from '../assets/openbook.png'
import rightarrow from '../assets/right.png'
import tap from '../assets/tap.png'
import play from '../assets/play.png'


const Syllabus = () => {
  return ( 
     <Box 
    >
        
        <Box>
        <Text
         as = 'b'
         fontSize={'5xl'}>Core Courses (Common in All Specializations)</Text>
        <Text>Every participant of the program will start by completing the following two core courses:</Text>
        </Box>
        <Box>
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter I (Core) 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <a href="https://github.com/panaverse/panaverse.github.io#quarter-i-core"><Text> CS-101: Object-Oriented Programming using TypeScript</Text> </a>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter II (Core)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <a href="https://github.com/panaverse/panaverse.github.io#quarter-ii-core"><Text>  Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless 
    Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text> </a>
    </AccordionPanel>
  </AccordionItem>
         </Accordion>
        </Box>
        <Box> 
         <Heading 
         fontSize={'4xl'}> Specialized Tracks</Heading>
         <Text> After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>

          <Heading fontSize={'4xl'}> Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
          <Text> This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized 
            distributed blockchains with 3D metaverse client experiences.</Text>
        </Box>

        <Box>
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter III 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   <a href="https://www.panaverse.co/"> Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</a>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter IV
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <a href="https://www.panaverse.co/"> Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</a>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </Box>

<Box>
<Heading>Artificial Intelligence (AI) and Deep Learning Specialization </Heading>
<Text>The AI and Deep Learning specialization focuses on building and deploying intelligent 
APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>

<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter III 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   <a href="https://www.panaverse.co/"> Developing Planet-Scale Intelligent APIs and Python Programming</a>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter IV
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <a href="https://www.panaverse.co/"> Deep Learning and MLOps</a>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>

<Box>
<Heading>Cloud-Native Computing Specialization </Heading>
<Text>The AI and Deep Learning specialization focuses on building and deploying intelligent 
APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter III 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   <a href="https://www.panaverse.co/"> Certified Kubernetes Application Developer (CKAD)

</a>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter IV
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <a href="https://www.panaverse.co/"> Developing Multi-Cloud APIs using CDK for Terraform</a>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>





<Box>
<Heading>Ambient Computing and IoT Specialization</Heading>
<Text>The AI and Deep Learning specialization focuses on building and deploying intelligent 
APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter III 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   <a href="https://www.panaverse.co/"> Ambient Computing with Voice Assistants and Matter Devices

</a>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Quarter IV
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <a href="https://www.panaverse.co/"> Embedded Programming using C and Rust</a>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>

                  {/* DETAILED SYLLABUS */}

        <Box as = 'u'>
          <Heading 
          textAlign={'center'}
          > DETAILED SYLLABUS</Heading>
        </Box>
        <Box>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'
              border='1px'
                p='25px'
                borderRadius='10px'
                background='white'
                color='black'
                boxShadow='7px 7px 7px #4A5568'
                backgroundColor={'blue.500'}
                w='500px'
                m='5px'
                
                >
                    QUARTER | (Core)
                    <AccordionIcon float={'right'} />   
              </Box>
              
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            
                <Heading 
                    textAlign={'center'}>CS-101: Object-Oriented Programming using TypeScript</Heading>
                <Box 
                p='15px'>
                  <Text 
                  fontSize={'xl'}>
                    <Heading>Description:</Heading>
                        We will start the program by learning the fundamentals
                        of Object-Oriented programming using JavaScript and TypeScript.
                        We will also understand the latest Web trends i.e.
                        Web 3.0 and Metaverse concepts and try to understand
                        their working from the perspective of the users.
                  </Text>
                </Box>

                <Box 
                p='15px'
                fontSize={'xl'}>
                  <Heading textAlign={'center'}>HTML & CSS</Heading>
                    <Heading> Homework</Heading>
                  
                    <Box>
                        <Text>
                        Learn HTML by Hira Khan 
                        <a href="http://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
                        <Button 
                        p='15px'
                        boxShadow='dark-lg'
                        background={'gray.500'}
                        m='5px'
                        borderRadius={'20px'}
                        >Watch Recorded Videos
                        <Image src={arrow} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                        </a> 
                        </Text>
                    </Box>

                      <Box>
                        <Text>
                        Learn CSS Intro by Hira Khan 
                        <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
                        <Button 
                        p='15px'
                        boxShadow='dark-lg'
                        borderRadius={'20px'}
                        background={'gray.500'}
                        m='5px'
                        >
                        Watch Recorded Videos
                        <Image src={arrow} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                        </a> 
                        </Text>
                      </Box>
              </Box>  


              <Box 
                  textAlign={'center'}
                  >
                    <Heading 
                    p='10px'>
                      Web 3.0 and Metaverse Theory
                    </Heading>
                    <Button  
                          boxShadow='7px 7px 7px #4A5568'
                          p={'15px'}
                          w='55%'
                          as = 'b'
                          m='5px'
                          >
                          <a href="http://https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit">
                          Introduction to Panaverse DAO
                          </a>
                      </Button>

                      <Text 
                        fontSize={'3xl'}
                        fontWeight={'bold'}
                        p='10px'>
                        Complete Web 3 Assignments included in the Web 3 User Guide
                        </Text>

                      <Button  
                          boxShadow='7px 7px 7px #4A5568'
                          p={'15px'}
                          w='55%'
                          as = 'b'
                          m='5px'
                          >
                          <a href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit">
                          Web 3.0 User Guide
                          </a>
                      </Button>
                  
                      <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit">
                            Virtual and Augmented Metaverse User Guide
                            </a>
                        </Button>
              </Box>


            <Box
            pt='25px'>
                  <Text 
                  textAlign={'center'} 
                  fontSize={'2xl'}
                  as='b'
                  >Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
                  </Text>

                  <Box 
                  p='15px'>
                        <Text 
                        fontSize={'xl'}>
                        Learn JavaScript by Zeeshan Hanif 
                        <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
                        <Button 
                        p='15px'
                        boxShadow='dark-lg'
                        borderRadius={'20px'}
                        background={'gray.500'}
                        m='5px'
                        >
                        Watch Recorded Videos
                        <Image src={arrow} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                        </a> 
                        </Text>
                </Box>

                <Box
                textAlign={'center'}>
                <Text 
                        fontSize={'3xl'}
                        fontWeight={'bold'}
                        p='10px'
                        textAlign={'center'}>
                        Github Repositeries/ Books
                </Text>

                      <Button  
                          boxShadow='7px 7px 7px #4A5568'
                          p={'15px'}
                          w='55%'
                          as = 'b'
                          m='5px'
                          >
                          <a href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4">
                        JavaScript from Beginner to Professional: JavaScript from Beginner to Professional
                          </a>
                          <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />

                      </Button>
                  
                      <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional">
                            JavaScript Book Code 
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
                            Getting Started Exercises with JavaScript and Node.js                     
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                  </Box> 

                  <Box 
                  p={'15px'}>
                  <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left'>
              Topics Covered in the Quiz:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Text fontSize={'2xl'}>
              Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)
              </Text>
              <ul>
                <li>Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm: <a href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" background='white'>https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing</a> 
                How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs: <a href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing "> https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing </a> <br />
                Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                <li>Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                <li>Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                <li>Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                <li>Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                <li>Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                <li>JavaScript promises, mastering the asynchronous</li>
              <li> <a href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"> https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript </a></li>
              <li> New JavaScript Features in ECMAScript 2022 and 2021 <a href=" https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"> https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg </a></li>
              </ul>
          
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
                  </Box>
                  
                  
          
            </Box>
            <Box
            textAlign={'center'}
            >
                  <Text 
                  textAlign={'center'} 
                  fontSize={'2xl'}
                  as='b'
                  >
                    Object-Oriented Programming with TypeScript
                  </Text>
                <Box>
                      <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href=" https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">
                            Enhance Your Web Development Skills Using Type-Safe  JavaScript 
                            </a>
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/learn-typescript">
                            Learning Repository                       </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.learningtypescript.com/">
                            TypeScript book for JavaScript developers out today                     
                            </a>
                            <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                  </Box>
            </Box> 

                  <Box 
                      p='15px'
                      fontSize={'xl'}>
                    <Heading pb='10px'> Homework Project</Heading>
                      <Text>
                        <a href="http://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
                        <Button 
                        p='15px'
                        boxShadow='dark-lg'
                        background={'gray.500'}
                        m='5px'
                        borderRadius={'20px'}
                        >https://github.com/panaverse/typescript-node-projects
                        <Image src={arrow} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                        </a> 
                        </Text>
                  </Box>

                <Box textAlign={'center'}>

                      <Heading>TypeScript for React</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://profy.dev/article/react-typescript">
                            Minimal TypeScript Crash Course For React With Interactive Code Exercises                      
                            </a>
                        </Button>
                </Box>

                <Box textAlign={'center'}>
                  
                  <Heading>TypeScript Quizzes</Heading>
                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      Fundamentals of TypeScript Quiz                     
                        
                  </Button>

                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      TypeScript Professional Proficiency Quiz                    
                        
                  </Button>
          </Box>

            <Box>
            <Text 
                  
                  fontSize={'2xl'}
                  as='b'
                  >Fundamentals of Version Control with Git
                  </Text>

                  <Box 
                  p='15px'>
                        <Text 
                        fontSize={'xl'}>
                        Version Control using Git and GitHub By Sir Zeeshan Hanif  
                        <a href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">
                        <Button 
                        p='15px'
                        boxShadow='dark-lg'
                        borderRadius={'20px'}
                        background={'gray.500'}
                        m='5px'
                        >
                        Watch Recorded Videos
                        <Image src={arrow} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                        </a> 
                        </Text>

                        <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left'>
              A step-by-step course for the complete  beginner by Tobias Günther
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <ul>
              <li> 
                <a href="https://help.github.com/articles/markdown-basics/">https://help.github.com/articles/markdown-basics/</a> 
              </li>
              <li> 
                <a href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences">http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences</a>
              </li>
              <li> 
              <a href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">https://git-scm.com/book/en/v2/Git-Branching-Rebasing</a>
              </li>
              <li> 
                <a href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches">http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches</a>
              </li>
              <li> 
                <a href="https://try.github.io/levels/1/challenges/1">For practice: https://try.github.io/levels/1/challenges/1</a>
            </li>
              <li> 
                <Text fontSize={'2xl'} as='b'>Homework</Text>
            </li>
              <li>
                <a href="https://www.datacamp.com/courses/introduction-to-git-for-data-science">https://www.datacamp.com/courses/introduction-to-git-for-data-science</a> 
              </li>
              <li> 
                <a href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html">Git Cheatsheet https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html</a> 
              </li>
              <li> Git Quiz before the start of Quarter 2 </li>
              <li>Total Questions: 60, Total Time: 75 minutes</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
                </Box>

            </Box>

          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'border='1px'
                p='25px'
                borderRadius='10px'
                background='white'
                color='black'
                boxShadow='7px 7px 7px #4A5568'
                backgroundColor={'blue.500'}
                w='500px'
                m='5px'
                
                >
                    QUARTER || (Core)
                    <AccordionIcon float={'right'} />   
              </Box>
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
          <Box>
            <Heading 
                    textAlign={'center'}>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js  13 and Cloud Development Kit (CDK) for Terraform</Heading>
                <Box 
                p='15px'>
                  <Text 
                  fontSize={'xl'}>
                    <Heading>Description:</Heading>
                    The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                  </Text>
                  <br />           
                  <Text>  Course Outline: </Text>
                </Box>
            </Box>
                <Box textAlign={'center'}>

                      <Heading p='15px'>Next.js 13 Web Development</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://beta.nextjs.org/docs">
                            Next 13 Official Documentation
                            </a>
                            <Image src={rightarrow} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://react.dev/learn">
                            Latest Learn React Official Website
                            </a>
                            <Image src={rightarrow} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/learn-nextjs">
                            Learn Next.js 13 Learning Repo
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>
                </Box>
            
            

            <Box 
            p='15px'
            textAlign={'center'}>

                      <Heading p='15px'>Next.js 13 using Chakra UI</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://chakra-ui.com/getting-started">
                            Chakra UI Docs 
                            </a>
                            <Image src={rightarrow} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/">
                            CSS Flexbox Explained _ Complete Guide to Flexible Containers and Flex Items
                            </a>
                            <Image src={tap} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>
                </Box>


                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>UI/UX Design with Figma, TailwindCSS, and Chakra UI</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">
                            Designing and Prototyping Interfaces with Figma
                            </a>
                            <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.figma.com/community/file/768809027799962739/Tailwind-CSS-UI">
                            Figma Design Kit for TailwindCSS
                            </a>
                            <Image src={tap} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.figma.com/community/file/971408767069651759/Chakra-UI-Figma-Kit">
                            Chakra UI Figma Kit
                            </a>
                            <Image src={rightarrow} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                </Box>

                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>API Routes with Next.js</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://nextjs.org/docs/api-routes/introduction">
                            API Routes
                            </a>

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
                            Build a tRPC CRUD API Example with Next.js
                            </a>
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">
                            Building REST APIs ,use tRPC instead
                            </a>
                        </Button>
                </Box>


                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>SQL and Prisma</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">
                            Start from scratch with relational databases
                            </a>

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.youtube.com/watch?v=5hzZtqCNQKk">
                            SQL For Beginners Video Tutorial
                            </a>
                            <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">
                            Database Management Systems and SQL  Tutorial for Beginners
                            </a>
                            <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                </Box>


                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>Next.js 13 using TailwindCSS </Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/">
                            Modern CSS with Tailwind, Second Edition by Noel Rappin
                            </a>
                            <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                </Box>

                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>AWS Application Composer</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.youtube.com/watch?v=BujE_tik5r8">
                            What is AWS Application Composer?
                            </a>
                            <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />

                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.youtube.com/watch?v=p411uh363jQ">
                            Event-driven apps with AWS Application Composer
                            </a>
                            <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://aws.amazon.com/application-composer/">
                            Visually design and build serverless applications quickly
                            </a>
                        </Button>

                        <Accordion pt='20px' textAlign={'left'}>
                                      <AccordionItem>
                                        <h2>
                                          <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                            <Box as="span" flex='1' textAlign='left'>
                                            AWS Free Tier
                                            </Box>
                                            <AccordionIcon />
                                          </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                        <Text>Must Have: <a href="https://aws.amazon.com/application-composer/">Create Free AWS Account</a> </Text>
                                        <Text>Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</Text>
                                        <Text>Now you can create a virtual VISA Debit card through the NayaPay app (https://www.nayapay.com/ ) which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</Text>
                                        <Text>You can also get a $300 credit </Text> <a href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html"> https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html</a>

                                        </AccordionPanel>
                                      </AccordionItem>
                        </Accordion>
                </Box>

                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) </Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/learn-multicloud-api-development">
                            Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                </Box>

                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'> Web 2.0 Projects</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/nextjs-projects">
                            Next.js Projects
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/styling-nextjs-projects">
                            Styling Next.js Projects using TailwindCSS and Chakra UI
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/ogzhanolguncu/min-todo">
                            Todo Full-Stack App
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.youtube.com/watch?v=nzJsYJPCc80">
                            Build a Twitter Clone
                            </a>
                            <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                </Box>

                <Box 
                p='15px'
                textAlign={'center'}>
                  <Heading  m='10px'>Earn While You Learn Projects</Heading>
                  <Heading>Build Full-Stack Next.js 13 Jamstack Templates</Heading>
                  <Text>You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</Text>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='10px'
                            >
                            <a href="https://github.com/panaverse/panaverse-template-standard">
                            The Panaverse Full-Stack Template Standard
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                    <Heading>Build QraphQL APIs</Heading>  
                    <Text>You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</Text>  
                </Box>


          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'border='1px'
                p='25px'
                borderRadius='10px'
                background='white'
                color='black'
                boxShadow='7px 7px 7px #4A5568'
                backgroundColor={'blue.500'}
                w='500px'
                m='5px'
                
                >
                    QUARTER ||| (Core)
                    <AccordionIcon float={'right'} />   
              </Box>
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
          <Box>
                  <Heading 
                    textAlign={'center'}>Web 3 and Metaverse Specialization</Heading>
                  <Heading 
                    textAlign={'center'}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Heading>
                <Box 
                p='15px'>
                  <Text 
                  fontSize={'xl'}>
                    <Heading>Description:</Heading>
                    In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                  </Text>

                    <Box textAlign={'center'}>
                      <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            
                            >
                            <a href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db?gi=586b4edd01f9">
                            The reasons for learning Web 2 before Web 3
                            </a>
                        </Button>
                        </Box>
                        <Text>  Course Outline: </Text>
                </Box>
            </Box>

            <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>Blockchain and Metaverse Theory </Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0">
                            The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
                            </a>
                            <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">
                            Mastering Blockchain - Fourth Edition by Imran Bashir
                            </a>
                            <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                </Box>


                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>Smart Contract Development in Solidity</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181">
                            Solidity Programming Essentials - Second Edition By Ritesh Modi
                            </a>
                            <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>

                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts">
                            Solidity Learning Repo
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                </Box>


                <Box 
                p='15px'
                textAlign={'center'}>

                      <Heading p='15px'>Dapp Development using Ethers.js and Next.js 13</Heading>
                        <Button  
                            boxShadow='7px 7px 7px #4A5568'
                            p={'15px'}
                            w='55%'
                            as = 'b'
                            m='5px'
                            >
                            <a href="https://github.com/panaverse/dapps-nextjs">
                            Dapp Learning Repo
                            </a>
                            <Image src={github2} boxSize='30px' h={'30px'} w={'30px'} />
                        </Button>
                    </Box>

                    <Box>
                    <Accordion>
                          <AccordionItem>
                            <h2>
                              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                Tokennomics
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel>
                              <Text>Blockchain Project: Create a Token and Launch ICO/IEO/IDO</Text>
                              <Text>As you probably know, the ICO (“Initial Coin Offering”) industry has been booming, and it’s completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia’s list of highest crowdfunding projects https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects, and you’ll notice that blockchain projects absolutely dominate the list.</Text>
                              

                              <ul>
                                <li> <a href="http://"></a> Understand the difference between IDO vs. IEO vs. ICO</li>
                                <li> Also check these links for latest listings: </li>
                                <li> <a href="https://icodrops.com">ICO list at ICO Drops </a> </li>
                                <li> <a href="https://topicolist.com/">ICO List of Best New Initial Coin Offerings</a> </li>
                                <li> <a href="https://cryptototem.com/ico-list/">Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs</a> </li>
                                <li> <a href="https://www.icolistingonline.com">ICO List Online https://www.icolistingonline.com</a> </li>
                                <li> <a href="https://coincodex.com/ieo-list/binance/">Binance IEO List https://coincodex.com/ieo-list/binance/</a> </li>
                                <li> <a href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/">Binance Launchpad https://www.coinspeaker.com/ieo/platform/binance-launchpad/</a> </li>
                                <li> <a href="https://icomarks.com/ieo">IEO List https://icomarks.com/ieo</a> </li>
                                <li> <a href="https://polkastarter.com">Polkastarter https://polkastarter.com</a> </li>
                                <li>Project Part 1: How to Launch a IEO on Binance Launchpad</li>
                                <li> <a href="https://appinventiv.com/blog/how-to-launch-an-ieo/">Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo/</a> </li>
                                <li> <a href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04">Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04</a> </li>
                                <li> Note: Also document the alternatives to Binance Launchpad. </li>
                                <li> Project Part 2: How to Launch a IDO on Polkastarter </li>
                                <li> <a href=" https://cryptorank.io/fundraising-platforms">Review the [list of top fundraising platforms https://cryptorank.io/fundraising-platforms</a> </li>
                                <li> <a href="https://polkastarter.com/">Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter https://polkastarter.com/</a> </li>
                                <li> Project Part 3: Create a Pako Token</li>
                                <li> By creating a token and related contracts, you’ll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future. </li>
                                <li> Therefore, for the sake of this chapter, let’s imagine that our Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO). </li>
                                <li> Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development. </li>
                                <li>Project Part 4: Develop Crowd Sale Contract </li>
                                <li>This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token) </li>
                                <li>Implement a payable buyToken() function.</li>
                                <li> Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought</li>
                                <li> Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal “owner” account.</li>
                                <li>Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.</li>
                                <li> <a href="https://docs.openzeppelin.com/contracts/4.x/crowdsales">You can use the openzeppelin crowd sale contracts https://docs.openzeppelin.com/contracts/4.x/crowdsales however you will have to update the code to the latest solidity version.</a> </li>
                                <li> Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract’s balance should have been reduced.</li>
                                <li> <a href="https://docs.openzeppelin.com/contracts/4.x/access-control">Note: Before you get started writing the token contract we suggest you review access control https://docs.openzeppelin.com/contracts/4.x/access-control</a> </li>
                                <li> Project Part 5: Trying it with MetaMask </li>
                                <li>While it’s always good to test your code, it’s often more satisfying to see the results of your work wrapped in a nice UI. Let’s see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet! </li>
                                <li> We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.</li>
                                <li> When it’s done, take note of what addresses the contracts were uploaded to and copy it!</li>
                                <li> Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn’t have any ethers, remember that you can use any faucet. </li>
                                <li> After the transaction has been confirmed, you might be confused about why you can’t see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to “register” it – after all, there are so many tokens out there, there’s no way MetaMask could list them all by default! </li>
                                <li> To do this, open the side menu and click on the “Add token” button to get started:</li>
                                <li> Once you’re on the token page, click on “Add custom token” and paste in the token contract’s address in the address field. </li>
                                <li> After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool! </li>
                                <li>Project Part 6: Trying it with Multisignature Wallets</li>
                                <li> <a href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/">Read https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/</a> </li>
                                <li> <a href="https://gnosis-safe.io/">Now use Gnosis Safe https://gnosis-safe.io/ with multi-sigs to do what you did in the last part.</a> </li>
                                <li> Project Part 7: Sending Tokens using Ethers.js </li>
                                <li> Write a Typescript program to send Pako Token to some friend’s address using Ethers.js. </li>
                                <li> <a href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/">You may follow this tutorial https://ethereum.org/en/developers/tutorials/send-token-etherjs/</a> </li>
                                <li> Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT </li>
                                <li> <a href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/">Read this NFT tutorial series https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/</a> </li>
                                <li> <a href="https://docs.openzeppelin.com/contracts/4.x/erc721">Create a NFT contract using the [OpenZepplen ERC721 NFT Standard https://docs.openzeppelin.com/contracts/4.x/erc721</a> </li>
                                <li> <a href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets">You may use the Preset ERC721 contract https://docs.openzeppelin.com/contracts/4.x/erc721#Presets</a> </li>
                                <li> <a href="https://opensea.io/">Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace https://opensea.io/ for sale.</a> </li>
                                <li> <a href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/">Implement a ERC721 Market https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/</a> </li>
                                
                              </ul>
                            </AccordionPanel>
                          </AccordionItem>
                    </Accordion>
                    </Box>

        

          </AccordionPanel>
        </AccordionItem>



         <AccordionItem>
    <Heading>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'border='1px'
          p='25px'
          borderRadius='10px'
          background='white'
          color='black'
          boxShadow='7px 7px 7px #4A5568'
          backgroundColor={'blue.500'}
          w='500px'
          m='5px'
          
          >
              QUARTER IV 
              <AccordionIcon float={'right'} />   
        </Box>
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
                    <Box>
                    <Heading 
                     textAlign={'center'}>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Heading>
                      <Box 
                      p='15px'>
                        <Text 
                        fontSize={'xl'}>
                          <Heading>Description:</Heading>
                          The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It’s unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.
                        </Text>
                      </Box>


                <Box 
                p='15px'>
                    <Heading>Course Outline:</Heading>

                    <Text>
                    Open Metaverse Web Development 
                    <a href="https://github.com/panaverse/metaverse-web">
                    <Button 
                    p='15px'
                    boxShadow='dark-lg'
                    borderRadius={'20px'}
                    background={'gray.500'}
                    m='5px'
                    >
                    Learning Repository
                    <Image src={arrow} boxSize='30px' h={'30px'} w={'30px'} />
                    </Button>
                    </a> 
                    </Text>

                </Box>


               <Box textAlign={'center'}>

                     <Text>
                            Blender 3D asset Creation for the Metaverse (Remote Zoom Class) <br />
                            Blender development is being funded by heavyweights in the real-time 
                            3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA,
                            AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected
                            to become the standard asset creation tool for metaverse.
                       </Text>

                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.blender.org/download/">
                      Blender 3+ Download                      
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                   </Button>

                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                      Blender 3.0 Beginner Tutorial                      
                      </a>
                      <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>

                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit">
                      Blender 3.0 Hotkey
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>

                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                      Blender Projects Textbook: Blender by Example 2nd Edition
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>

                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5">
                      Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>

                  <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'15px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.youtube.com/watch?v=H7T0SzdFHwg">
                      Best Hardware Performance for Blender Rendering
                      </a>
                      <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>
                  
                      </Box>

                      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        ASSIGNMENT 1:
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
          <Box>

            <Text>
            Build a 3D Donut using Blender 3 as shown in these video tutorials
            </Text>
          <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'25px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                       https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
                      </a>
                      <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>
          </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        ASSIGNMENT 2:
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box>
      <Text>Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition</Text>
          <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'25px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>
          </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        ASSIGNMENT 3:
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box>
      <Text>Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition</Text>
          <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'25px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>
          </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        ASSIGNMENT 4:
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box>
      <Text>Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition</Text>
          <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'25px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>
          </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        ASSIGNMENT 5:
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box>
               <Text>Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition</Text>
                 <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'25px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                      https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                      </a>
                      <Image src={bok2} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>
          </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        ASSIGNMENT 6:
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box>
      <Text>Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials </Text>
                 <Button  
                      boxShadow='7px 7px 7px #4A5568'
                      p={'25px'}
                      w='55%'
                      as = 'b'
                      m='5px'
                      >
                      <a href="https://www.youtube.com/watch?v=bpvh-9H8S1g">
                      https://www.youtube.com/watch?v=bpvh-9H8S1g
                      </a>
                      <Image src={play} boxSize='30px' h={'30px'} w={'30px'} />
                  </Button>
          </Box>
    </AccordionPanel>
  </AccordionItem>
</Accordion> 

                    </Box>
    </AccordionPanel>
         </AccordionItem>

      </Accordion>
        </Box>

     </Box>
  )
};

export default Syllabus;