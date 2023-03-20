import React, { useContext } from 'react';
import { useRef } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { Box, Flex, Button, Text, Input, IconButton } from '@chakra-ui/react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlinePlus,
} from 'react-icons/ai';
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons';
import styles from './Navbar.module.scss';
import AddBtn from '../../atoms/addBtn/AddBtn';
import { UserContext } from '../../../contexts/UserContext.js';
import { useColorMode } from '@chakra-ui/react';
import "../../../fonts.css";


const Navbar = ({ onAddTrip, searchInput, handleSearch }) => {
  const [phone] = useMediaQuery('(max-width: 800px)');
  const { logOut, name } = useContext(UserContext);
  const { toggleColorMode, colorMode } = useColorMode();
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Box className={styles.navbar}>
      {phone ? (
        <Flex alignItems='center' justifyContent='space-between' flex='1'>
          <Text className={styles.logo} fontSize='4xl' >
            Back2Pack
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              size='lg'
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command='⌘T'>
                New Tab
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <>
          <Flex alignItems='center' flex='1'>
            <Box mr='5'>
              <Text className={styles.logo} fontSize='4xl' fontFamily='cursive'>
                Back2Pack
              </Text>
            </Box>
            <a href='http://localhost:3000'>
              <Button variant='ghost' leftIcon={<AiOutlineHome />} size='lg'>
                Home
              </Button>
            </a>
            <a href='http://localhost:3000/User'>
              <Button variant='ghost' leftIcon={<AiOutlineUser />} size='lg'>
                User
              </Button>
            </a>
          </Flex>
          <Flex alignItems='center' flex='3' justifyContent='center'>
            <Input
              placeholder='Search'
              size='md'
              value={searchInput}
              onChange={(event) => handleSearch(event.target.value)}
              w='50%'
            />
            <Box ml='5'>
              <AddBtn className={styles.addBtn}
                colorScheme='teal'
                aria-label='addBtn'
                size='lg'
                transition="none"
                icon={<AiOutlinePlus />}
                onClick={() => onAddTrip(true)}
              />
            </Box>
          </Flex>
          <Flex
            marginLeft='auto'
            marginRight='0'
            justifyContent='flex-end'
            alignItems='center'
            flex='1'
          >
            <Box bg='#ffffff' borderRadius='full' p={2} mr={2}>
              <AiOutlineUser size={32} color='#1e212d' />
            </Box>
            <Text fontSize='xl' fontWeight='bold'>
              {formattedName}
            </Text>
            <Button ml={10} variant='outline' onClick={() => logOut()}>
              Logout
            </Button>
            <Button ml={10} variant='outline' onClick={() => toggleColorMode()}>
              {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Navbar;
