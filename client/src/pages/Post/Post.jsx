import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Post.css";

const Post = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3301/posts/ById/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3301/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios.post(`http://localhost:3301/comments`, {commentBody: newComment, PostId: id}).then(() => {
      //window.location.reload();
      setComments([...comments, {commentBody: newComment}]);
      setNewComment(""); 
    });
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post">
          <div className="title">{postObject.title}</div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">@{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="input-comment-cntr">
          <input
            type="text"
            placeholder="Comment..."
            className="input-comment"
            onChange={(event)=>{setNewComment(event.target.value)}}
            value={newComment}
          />
          <button onClick={addComment} className="btn-comment">Comment</button>
        </div>
        <div className="comments-cntr">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment-cntr">
                <div className="comment">{comment.commentBody}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
