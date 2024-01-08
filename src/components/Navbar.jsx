import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" gap="10px">
      <Text
        fontSize={{ base: "14px", md: "18px", lg: "20px", xl: "30px" }}
        fontWeight="bold"
        color="#000000"
      >
        Dojo Tasks
      </Text>
      <Spacer />

      <HStack spacing={{ base: "2px", lg: "20px" }}>
        <Box bg="gray.200" p={{ base: "2px" }}>
          M
        </Box>
        <Text
          fontSize={{ base: "12px", md: "14px", lg: "18px", xl: "22px" }}
          color="#000000"
        >
          mario@netninja.dev
        </Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
