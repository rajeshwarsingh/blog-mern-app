import Blog from "../models/blogs.js";
import blogsData from "../data/blogs-data.js"

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const blog = await Blog.findById(_id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const loadBlog = async () => {
  try {
    await Blog.insertMany(blogsData.blogs);
    return "done"
  } catch (error) {
    return error
  }
};

export const updateBlog = async (req, res) => {
  const { id: _id } = req.params;
  const blog = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(_id, blog, { new: true });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
