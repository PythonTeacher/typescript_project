// React Router 사용하기

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./8_Home";
import About from "./8_About";
import { MusicEx } from "./6_Context";
import MusicList2 from "./7_MusicList2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/home">Home</Link> | 
        <Link to="/music">Music</Link> | 
        <Link to="/musiclist">MusicList</Link> | 
        <Link to="/about">About</Link>
        <div>
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/music" Component={MusicEx} />
            <Route path="/musiclist" Component={MusicList2} />
            <Route path="/about" Component={About} />
            <Route path="/" element={<Navigate replace to="/home"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;