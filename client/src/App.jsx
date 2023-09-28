import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Post from "./pages/Post/Post";
import CreateUser from "./pages/createUser/createUser";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className={"navbar"}>
          <Link to={"/"}>Home Page</Link>
          <Link to={"/createPost"}>Create a Post</Link>
          <Link to={"/createUser"}>Create User</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
