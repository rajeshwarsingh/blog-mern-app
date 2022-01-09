import express from "express";
import {
  getBlogs,
  getSingleBlog,
} from "../controllers/blogs.js";

const router = express.Router();

// http://localhost:8080/blogs/ istekleri burada yapılacak
// GET, POST, DELETE, PUT, PATCH

router.get("/", getBlogs);
router.get("/:id", getSingleBlog);

export default router;
