import react, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { updateComment, fetchSingleComment } from '../redux/actions/comment';
import { addChildInTree } from '../util'

export const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const [user, setUser] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ user, text });
    setText("");
    setUser("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder=' User' value={user} className="comment-form-input" onChange={(e) => setUser(e.target.value)}></input>
      <textarea
        className="comment-form-textarea"
        placeholder=' Comment'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

function Comment({ comment }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentComments = useSelector(state => state.comments);

  const [isReplying, setIsReplying] = useState(false)
  const [isReplyText, setIsReplyText] = useState(true)

  const nestedComments = (comment.children || []).map(comment => {
    return <Comment key={comment.id} comment={comment} type="child" />
  })

  const addComment = async ({ user, text }) => {
    let newChildElement = {
      id: uuidv4(),
      text,
      author: user,
      createdAt: new Date(),
      children: []
    }

    let newChild = [newChildElement].concat(comment.children)
    comment.children = newChild
    let ParentComments = addChildInTree(currentComments.currentComment.comments, newChild.length)

    let commentData = currentComments.currentComment

    commentData.comments = ParentComments
    dispatch(updateComment(commentData['_id'], commentData));
    toast.success('Comment successfully updated!');
    setIsReplyText(true);
    setIsReplying(false);
  }

  return (
    <>
      <div style={{ width: '80%', borderWidth: 10, borderStyle: 'double', borderWidth: 10, textAlign: "left", margin: 10, padding: 10, "marginLeft": "25px", "marginTop": "10px", backgroundColor: '#F2F6FF', color: 'black', border: '1px' }}>
        <div style={{ width: '100%', borderStyle: 'ridge' }}>
          <div style={{ width: '20%', display: 'inline', paddingRight: 10 }}><img style={{ borderRadius: 50 }} width={30} height={30} src="https://www.iconpacks.net/icons/1/free-icon-user-group-296.png" /></div>
          <div style={{ width: '80%', display: 'inline' }}><span style={{ color: 'blue' }}>{comment.author}</span> <span style={{ fontSize: 'small' }}>{(new Date(comment.createdAt)).toUTCString()}</span></div>
          <div style={{ padding: 5, margin: 5 }}>{comment.text}</div>
          <div >
            {isReplyText && <button style={{ color: 'blue', padding: 5, margin: 5 }} onClick={() => {
              setIsReplyText(false);
              setIsReplying(true);

            }}>Reply</button>}
            {isReplying && (
              <div><CommentForm
                submitLabel="Reply"
                hasCancelButton={true}
                handleSubmit={(text) => {
                  addComment(text)
                }}
                handleCancel={() => {
                  setIsReplyText(true);
                  setIsReplying(false);
                }}
              />
              </div>
            )}
          </div>
        </div>
        <div style={{ "marginLeft": "25px", "marginTop": "10px", paddingLeft: 10, backgroundColor: 'white', border: '10px' }}>
          {nestedComments}
        </div>
      </div>
    </>
  )
}

function Comments() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentComments = useSelector(state => state.comments);
  useEffect(() => {
    dispatch(fetchSingleComment(id));
  }, [dispatch, id]);

  let commentData = currentComments && currentComments.currentComment && currentComments.currentComment.comments || []
  commentData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return (
    <div>
      {(commentData).map((comment) => {
        return (
          <Comment key={comment.id} comment={comment} />

        )
      })
      }
    </div>
  )
}

export default Comments