import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from "./pages/Home/Home"
import CreatePost from './pages/CreatePost/CreatePost';

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Link to={"/createPost"}>Create a Post</Link>
        <Link to={"/"}>Home Page</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/createPost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
