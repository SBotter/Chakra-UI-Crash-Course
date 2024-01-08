import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  //const tasks = useLoaderData();

  const task = {
    tasks: [
      {
        id: 1,
        title: "Fix the navbar",
        description:
          "There is an issue with the navbar on the homepage. It is not displaying correctly on mobile devices.",
        author: "Mario",
        img: "/img/mario.png",
      },
      {
        id: 2,
        title: "Add links to the footer",
        description:
          "The footer is currently empty. We need to add some links to important pages on the site.",
        author: "Yoshi",
        img: "/img/yoshi.png",
      },
      {
        id: 3,
        title: "Update the contact form",
        description:
          "The contact form is not working properly. We need to fix the form validation and make sure the form submissions are being sent to the correct email address.",
        author: "Peach",
        img: "/img/peac.png",
      },
      {
        id: 4,
        title: "Improve the site's performance",
        description:
          "The site is currently running slow. We need to optimize images and minify CSS and JavaScript to improve the site's loading speed.",
        author: "Luigi",
        img: "/img/luigi.png",
      },
      {
        id: 5,
        title: "Add social media links",
        description:
          "There are no links to our social media profiles on the site. We need to add links to our Facebook, Twitter, and Instagram accounts in the header and footer.",
        author: "Mario",
        img: "/img/mario.png",
      },
      {
        id: 6,
        title: "Implement a search feature",
        description:
          "The site does not have a search feature. We need to add a search bar in the header that allows users to search for specific pages or products on the site.",
        author: "Yoshi",
        img: "/img/yoshi.png",
      },
      {
        id: 7,
        title: "Fix the responsive layout",
        description:
          "The site's layout is not responsive. It does not look good on mobile devices. We need to make sure the site looks good on all devices.",
        author: "Peach",
        img: "/img/peach.png",
      },
      {
        id: 8,
        title: "Add a newsletter signup form",
        description:
          "We do not have a way for users to sign up for our newsletter. We need to add a newsletter signup form in the footer that allows users to enter their email address.",
        author: "Luigi",
        img: "/img/luigi.png",
      },
      {
        id: 9,
        title: "Improve the design",
        description:
          "The site's design is outdated. We need to update the site's color scheme and font to make it look more modern.",
        author: "Mario",
        img: "/img/mario.png",
      },
      {
        id: 10,
        title: "Add more products to the online store",
        description:
          "We need to add more products to the online store. We also need to add categories and filters to make it easier for users to find what they are looking for.",
        author: "Yoshi",
        img: "/img/yoshi.png",
      },
    ],
  };

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {task &&
        task.tasks.map((task) => (
          <Card key={task.id} borderTop="8px" borderColor="purple.400">
            <CardHeader color="gray.700">
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Avatar name={task.author} src={task.img} />
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
/*
export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
  
};
*/
