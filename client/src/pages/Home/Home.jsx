import axios from "axios";
import { useEffect, useState, React } from "react";

import "./Home.css";

const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
        <h1>Posts</h1>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
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
