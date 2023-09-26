import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Post.css";

const Post = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3306/posts/ById/${id}`).then((response) => {
      setPostObject(response.data);
    });
  }, []);

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
        Comments
      </div>
    </div>
  );
};

export default Post;
