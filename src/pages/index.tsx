import {
	Stack,
	HStack,
	Box,
	Heading,
	Text,
	UnorderedList,
	ListItem,
	Flex,
	Link,
	Button,
	Icon,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";

const words = [
	"student.",
	"gamer.",
	"problem solver.",
	"programmer.",
	"painter.",
	"music enthusiast.",
	"Full Stack Developer.",
];

const Index = () => {
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);
	const [reverse, setReverse] = useState(false);
	const aboutMe =
		"Hello! I am Isaiah and I am currently a fourth year Computer Science major at San Diego State University. I enjoy building web applications that are meaningful and can make a difference. I am interested in building on my current skills and learning new technologies to further develop my skills as a Full Stack Developer.";

	const aboutMe2 =
		"I am currently the lead developer on the 4-Dimensional Visual Delivery of Big Climate Data (4DVD) team at the Climate Informatics Lab at SDSU.";
	const aboutMe3 =
		"Outside of programming, I enjoy listening and sharing music, creating art, playing video games, and cooking.";

	// typeWriter
	useEffect(() => {
		if (index === words.length) {
			return;
		}

		if (
			subIndex === words[index].length + 1 &&
			index !== words.length - 1 &&
			!reverse
		) {
			setReverse(true);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => prev + 1);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 50));

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);

	// blinker
	useEffect(() => {
		const timeout2 = setTimeout(() => {
			setBlink((prev) => !prev);
		}, 100);
		return () => clearTimeout(timeout2);
	}, [blink]);

	return (
		<Box backgroundColor='#eaeaea' minH='fit-content' overflow='hidden'>
			<NavBar />
			<Box height='200'></Box>
			<Box ml='auto' mr='auto' maxW='fit-content' top='100'>
				<Text color='#ff2e63'>Hi, my name is</Text>
				<Heading fontSize={60} color='#252a34'>
					Isaiah Dorado
				</Heading>
				<Text color='#ff2e63'>
					I am a {`${words[index].substring(0, subIndex)}`}
				</Text>
			</Box>
			<Box height='400'></Box>
			<Stack ml='auto' mr='auto' maxW={800} id='About'>
				<Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
					<Heading fontSize='xl'> About Me </Heading>
					<Text mt={4}> {aboutMe} </Text>
					<Text mt={4}> {aboutMe2} </Text>
					<Text mt={4}> {aboutMe3} </Text>
					<Text mt={4}>
						<b>Technologies:</b>
					</Text>
					<Box ml='auto' mr='auto' maxW='fit-content'>
						<UnorderedList>
							<Flex>
								<Box mr={20}>
									<ListItem>TypeScript</ListItem>
									<ListItem>JavaScript</ListItem>
									<ListItem>HTML/CSS</ListItem>
								</Box>
								<Box mr={20}>
									<ListItem>Angular</ListItem>
									<ListItem>React</ListItem>
									<ListItem>MariaDB</ListItem>
								</Box>
								<Box mr={20}>
									<ListItem>Python</ListItem>
									<ListItem>Git</ListItem>
									<ListItem>Docker</ListItem>
								</Box>
							</Flex>
						</UnorderedList>
					</Box>
				</Box>
			</Stack>
			<Box height='400'></Box>
			<Stack ml='auto' mr='auto' maxW={800} id='Projects'>
				<Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
					<Heading fontSize='xl'> Projects </Heading>
					<Box ml='auto' mr='auto' maxW='fit-content' mt={4}>
						<HStack spacing={5} mb={4}>
							<Box
								p={5}
								shadow='md'
								borderWidth='1px'
								flex='1'
								borderRadius='md'
								w='lg'
								textAlign='center'
							>
								<Link
									color='#08d9d6'
									href='https://doradoisaiah.com/'
									target='_blank'
								>
									Mockeddit (Reddit Clone)
								</Link>
							</Box>
							<Box
								p={5}
								shadow='md'
								borderWidth='1px'
								flex='1'
								borderRadius='md'
								textAlign='center'
							>
								<Link
									color='#08d9d6'
									href='https://4dvd.sdsu.edu/'
									target='_blank'
								>
									4DVD
								</Link>
							</Box>
						</HStack>
						<HStack spacing={5}>
							<Box
								p={5}
								shadow='md'
								borderWidth='1px'
								flex='1'
								borderRadius='md'
								w='lg'
								textAlign='center'
							>
								<Link
									color='#08d9d6'
									href='https://github.com/zaydor/fantasy-score-predictor'
									target='_blank'
								>
									Fantasy Football Score Predictor
								</Link>
							</Box>
							<Box
								p={5}
								shadow='md'
								borderWidth='1px'
								flex='1'
								borderRadius='md'
								textAlign='center'
							>
								Mockify (In Development)
							</Box>
						</HStack>
					</Box>
				</Box>
			</Stack>
			<Box height='400'></Box>
			<Stack ml='auto' mr='auto' maxW={800} id='Contact'>
				<Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
					<Heading fontSize='xl'> Let's Connect </Heading>
					<Text mt={4}>
						I am currently actively looking for entry level opportunities. Feel
						free to send me an email if you have any questions or you would just
						like to say hi :)
					</Text>
					<Box height='50'></Box>
					<Box ml='auto' mr='auto' maxW='fit-content'>
						<Link href='mailto:isaiahdorado@gmail.com' target='_blank'>
							<Button>Say Hi</Button>
						</Link>
					</Box>
				</Box>
			</Stack>
			<Box height='200'></Box>
			<Box pos='fixed' bottom='10' left='5'>
				<Box>
					<Link href='https://github.com/zaydor' target='_blank'>
						<Icon as={GoMarkGithub} />
					</Link>
				</Box>
				<Box>
					<Link
						href='https://www.linkedin.com/in/isaiah-dorado/'
						target='_blank'
					>
						<Icon as={IoLogoLinkedin} />
					</Link>
				</Box>
				<Box></Box>
			</Box>
		</Box>
	);
};

export default Index;
