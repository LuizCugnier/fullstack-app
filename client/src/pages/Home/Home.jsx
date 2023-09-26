import axios from "axios";
import { useEffect, useState, React } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3306/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      {listOfPosts.map((value, key) => {
        return (
          <div
            className="post"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">@{value.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
