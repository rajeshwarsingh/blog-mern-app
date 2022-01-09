import express from "express";
import {
  getSingleComment,
  createComment,
  updateComment,
} from "../controllers/comments.js";

const router = express.Router();

router.get("/:id", getSingleComment);
router.post("/", createComment);
router.patch("/:id", updateComment);

export default router;
