import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box position="fixed" bottom="0" width="100%" bg="gray.800" p={4} color="white">
      <Flex justify="space-around">
        <Link to="/">
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
        </Link>
        <Link to="/about">
          <IconButton aria-label="About" icon={<FaInfoCircle />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
        </Link>
        <Link to="/profile">
          <IconButton aria-label="Profile" icon={<FaUser />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
