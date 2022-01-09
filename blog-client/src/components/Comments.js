import react, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import Comments, { CommentForm } from './CommentList'
import { createComment,updateComment, fetchSingleComment } from '../redux/actions/comment';

function ListComments({ blog }) {

  const { id } = useParams();
  const dispatch = useDispatch();
  const currentComments = useSelector(state => state.comments);

  const { currentComment } = currentComments;
  useEffect(() => {
    dispatch(fetchSingleComment(id));
  }, [dispatch, id]);

  const handleNewComment = (data) => {
    //update comment
    if (currentComment && currentComment.blogId && currentComment.blogId === id) {
      try {
        let commentData = currentComment

        commentData.comments.push({
          id: uuidv4(),
          text: data.text,
          author: data.user,
          createdAt: new Date(),
          children: []
        })
        
        dispatch(updateComment(commentData['_id'], commentData));
        toast.success('Comment successfully updated!');
        
      } catch (error) {
        toast.error(error);
      }
    } else {
      // add new comment
      try {
        let commentData =currentComment;
        commentData = {
          commentId: uuidv4(),
          blogId: blog['_id'],
          title: blog['title'],
          author: blog['author'],
          createdAt: blog['createdAt'],
          comments: [{
            id: uuidv4(),
            text: data.text,
            author: data.user,
            createdAt: new Date(),
            children: []
          }]
        }
        dispatch(createComment(commentData));
        dispatch(fetchSingleComment(id));
        toast.success('Comment successfully added!');
      } catch (error) {
        toast.error(error);
      }
    }
  }

  return (
    <div>
      <div style={{ padding: 15, textAlign: 'left' }} >
        <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Add a Comment</div>
        <div><CommentForm handleSubmit={handleNewComment} submitLabel="Submit" /></div>
      </div>
      <div>
        <Comments />
      </div>

    </div>
  );
}

export default ListComments;
