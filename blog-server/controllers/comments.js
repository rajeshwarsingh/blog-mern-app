import Comment from "../models/comments.js";

export const getSingleComment = async (req, res) => {
  try {
    const { id} = req.params;
    const comment = await Comment.findOne({blogId:id});
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createComment = async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updateComment = async (req, res) => {
  const { id: _id } = req.params;
  const comment = req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(_id, comment, { new: true });
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};