import React from 'react';
import { chakra, useColorModeValue, Flex, Button, Link } from '@chakra-ui/react';
import Logo from '../images/Logo';
import AddBlogForm from './AddBlogForm';
import { useDisclosure } from '@chakra-ui/hooks';

const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <chakra.header bg={bg} w="full" px={5} py={1} shadow="md" mx="auto">
        <Flex align="center" justify="space-between" mx="auto" maxW="1420px">
          <Flex>
            <chakra.a href={'/'} title="Choc Home Page" display="flex" alignItems="center">
              <Logo />
            </chakra.a>
          </Flex>
          <Flex align="center">
            <Button ml="10" colorScheme="teal" size="sm" onClick={onOpen}>
              New Blog
            </Button>
          </Flex>
        </Flex>
      </chakra.header>

      <AddBlogForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
