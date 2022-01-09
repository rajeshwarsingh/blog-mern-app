import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  ID: String,
  blogId: String,
  title:String,
  author:String,
  createdAt: Date,
  comments : [{
    id : String,
    text : String,
    author: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
    children : { type : Array , "default" : [] }
    }]
  });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
