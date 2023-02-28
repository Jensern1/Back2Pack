import React from "react";
import { useRef } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Box, Flex, Button, Text, Input, IconButton } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [phone] = useMediaQuery("(max-width: 800px)");

  return (
    <Box className={styles.navbar}>
      {phone ? (
        <Flex alignItems="center" justifyContent={"space-between"} flex="1">
          <Text fontSize="2xl" fontFamily="cursive">
            Back2Pack
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <>
          <Flex alignItems="center" flex="1">
            <Box>
              <Text fontSize="2xl" fontFamily="cursive">
                Back2Pack
              </Text>
            </Box>
            <Button variant="ghost" leftIcon={<AiOutlineHome />} size="sm">
              Home
            </Button>
            <Button variant="ghost" leftIcon={<AiOutlineUser />} size="sm">
              User
            </Button>
          </Flex>
          <Input placeholder="Search" size="md" />
          <IconButton
            variant="outline"
            colorScheme="teal"
            mr={20}
            aria-label="Search database"
            icon={<AiOutlineSearch />}
          />
          <Flex alignItems="center">
            <Box bg="#ffffff" borderRadius="full" p={1} mr={2}>
              <AiOutlineUser size={20} color="#1e212d" />
            </Box>
            <Text fontSize="sm">Username</Text>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Navbar;
