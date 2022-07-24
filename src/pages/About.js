import React from "react";
import '../About.css';
import logo from "../logo.png"
import { Link } from "react-router-dom";
export default function About(){
    return (
        <div className='About'>
            <Link to='/'>
                <img className="image" src={logo} alt="Logo"></img>
            </Link>
            <h1 className="contentText">Hello.</h1>
        </div>
    );
}

