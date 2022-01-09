import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  author: String,
  content: String,
  tag: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
