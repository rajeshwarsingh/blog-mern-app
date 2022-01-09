import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBlog } from '../redux/actions/blog';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { Flex, Box, Image, chakra, Spacer, Link, Heading, Text } from '@chakra-ui/react';
import Comments from './Comments'

const BlogDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
  const currentBlogs = useSelector(state => state.posts);
  const { currentBlog, loading, error } = currentBlogs;

  const convertRelativeTime = date => {
    return moment(date).format('LL');
  };

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {error && <p>{error}</p>}
          <><Flex maxW="900px" mx="auto" align="center" justify="center" px={5}>
            <Box w="100%" py={5}>
              <Box py={6}>
                <Heading as="h1" size="xl" >
                  {currentBlog?.title}
                </Heading>
                <Heading
                  as="h2"
                  fontWeight="normal"
                  size="sm"
                  mt={2}
                  fontStyle="italic"
                >
                  {currentBlog?.subtitle}
                </Heading>

                <Box my={6}>
                  <Flex align="center">
                    <Flex align="center" justify="between">
                      <Image
                        h={10}
                        fit="cover"
                        rounded="full"
                        src="https://source.unsplash.com/random/48x48"
                        alt="Avatar"
                      />
                      <Flex align="flex-start" direction="column">
                        <Link mx={3} fontWeight="bold" color={('blue.600', 'brand.200')}>
                          {currentBlog?.author}
                        </Link>
                        <chakra.span mx={3} fontSize="sm" >
                          {convertRelativeTime(currentBlog?.createdAt)}
                        </chakra.span>
                      </Flex>
                    </Flex>

                    <Spacer />
                  </Flex>
                </Box>
                <figure style={{ marginBottom: '2rem' }}>
                  <Image
                    w="100%"
                    borderRadius="md"
                    src={currentBlog?.image || 'https://loremflickr.com/1280/720'}
                    alt={currentBlog?.tag}
                  />
                </figure>
                <Text mt={4} fontSize="lg" >
                  {currentBlog?.content}
                </Text>
              </Box>
            </Box>
          </Flex>
            <Flex maxW="900px" mx="auto" align="center" justify="center" px={5}>
              <Box w="100%" py={5}>
                <Comments blog={currentBlog} />
              </Box>
            </Flex>
          </>
        </div>

      )}
    </>
  );
};

export default BlogDetails;
