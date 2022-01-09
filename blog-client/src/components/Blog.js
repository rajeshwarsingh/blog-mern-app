import React from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';
import { Image, chakra, useColorModeValue, Link, Box, Flex, Spacer } from '@chakra-ui/react';

const Blog = ({ blog }) => {
  const convertRelativeTime = date => {
    return moment(date).fromNow();
  };

  return (
    <>
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={blog?.image || 'https://loremflickr.com/448/256'}
        alt={blog?.tag}
      />

      <Box p={6}>
        <Box>
          <chakra.span
            fontSize="xs"
            textTransform="uppercase"
            color={useColorModeValue('brand.600', 'brand.300')}
            cursor="pointer"
          >
            {blog.tag}
          </chakra.span>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            _hover={{ color: 'gray.500', textDecor: 'underline' }}
            href={`posts/${blog._id}`}
          >
            {blog.title}
          </Link>
          <chakra.span mt={2} fontSize="sm" fontStyle="italic" color={useColorModeValue('gray.500', 'gray.500')}>
            {blog.subtitle}
          </chakra.span>
          <chakra.p mt={4} fontSize="sm" color={useColorModeValue('gray.400', 'gray.400')}>
            {blog.content.substring(0, 225) + '...'}
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center" justify="between">
              <Image h={10} fit="cover" rounded="full" src="https://source.unsplash.com/random/48x48" alt="Avatar" />
              <Link mx={2} fontWeight="bold" color={useColorModeValue('gray.700', 'gray.200')}>
                {blog.author}
              </Link>
            </Flex>
            <Spacer />
            <chakra.span mx={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
              {convertRelativeTime(blog.createdAt)}
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Blog;
