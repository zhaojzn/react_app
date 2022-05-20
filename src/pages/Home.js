import React from "react";
import '../App.css';
import logo from '../logo.png';
import github from '../github.png';
import { Link } from "react-router-dom";


const run = () =>{
    console.log("Redirected");
} 


export default function Home(){
    return (
        <div className='App'>
            <div className="header">
                <Link to='/about'>
                <button className="button-27" onClick={run}>About</button>
                </Link>
                <button className="button-27">Work</button>
            </div>
            <div className="content">
        
            <h1 className ="contentText">Hello, I'm Jason.  
            <h1 className="contentText">I am a student.</h1>
            </h1>
            <p1 className="contentPara">This website is a work in progress.</p1>
            <Link to='/'>
            <img className="image" src={logo} alt="Logo"></img>
            </Link>
            <a href='https://github.com/zhaojzn/react_app'> 
            <img className="githubIcon" src ={github} alt="github"></img>
            </a>
            </div>
        </div>
    );
}