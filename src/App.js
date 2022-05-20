import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
/*
import logo from './logo.png';
import github from './github.png';
*/
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";

/*
import { render } from "@testing-library/react";

const run = () =>{
  alert("work in progress");
} 
*/


const App = () => {
  return (
    <Router basename="/react_app/">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/test" element={<Test/>}/>

      </Routes>
    </Router>
  );
}


export default App;
