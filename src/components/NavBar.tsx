import {
	Box,
	Flex,
	Heading,
	Tooltip,
	Text,
	Button,
	Link,
} from "@chakra-ui/react";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<Flex zIndex={1} position='sticky' top={0} p={4}>
			<Flex
				pos='relative'
				maxW='fit-content'
				mr='inherit'
				ml='auto'
				alignItems='center'
			>
				<Box mr={4}>
					<Link href='#About'>
						<Text color='red'>About</Text>
					</Link>
				</Box>
				<Box mr={4}>
					<Link href='#Projects'>
						<Text color='red'>Projects</Text>
					</Link>
				</Box>
				<Box>
					<Link href='#Contact'>
						<Text color='red'>Contact</Text>
					</Link>
				</Box>
				<Box>
					<Link
						href='https://github.com/zaydor/zaydor/blob/master/DoradoIsaiahResume_2021.pdf'
						target='_blank'
					>
						<Button color='red'>Resume</Button>
					</Link>
				</Box>
			</Flex>
		</Flex>
	);
};
