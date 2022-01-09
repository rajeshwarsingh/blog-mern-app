import axios from 'axios';
import { API_ENDPOINT } from '../config/config'

const POST = `${API_ENDPOINT}/blogs`;

export const fetchBlogs = async () => {
  const blog = await axios.get(POST);
  return blog
};

export const fetchSingleBlog = async id => {
  return await axios.get(`${POST}/${id}`);
};

// Comment
const COMMENT = `${API_ENDPOINT}/comments`;


export const fetchSingleComment = async id => {
  return await axios.get(`${COMMENT}/${id}`);
};

export const createComment = async blog => {
  return await axios.post(COMMENT, blog);
};

export const updateComment = async (id, updatedBlog) => {
  return await axios.patch(`${COMMENT}/${id}`, updatedBlog);
};

