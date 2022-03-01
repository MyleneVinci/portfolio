import React from 'react';
import { Carousel } from '3d-react-carousal';
import CSS from '../../assets/pictures/CSS.png';
import express from '../../assets/pictures/express.png';
import git from '../../assets/pictures/git.png';
import html from '../../assets/pictures/html.png';
import Javascript from '../../assets/pictures/Javascript.png';
import mysql from '../../assets/pictures/mysql.png';
import nodejs from '../../assets/pictures/nodejs.png';
import react from '../../assets/pictures/react.png';
import './Skills.css';

const Skills = () => {

    let slides = [
        <img  className="slide-icon" src={html} alt="html-icon" />,
        <img  className="slide-icon"   src={CSS} alt="css-icon" />  ,
        <img  className="slide-icon"   src={Javascript} alt="javascript-icon" />  ,
        <img  className="slide-icon"   src={react} alt="react-icon" />  ,
        <img  className="slide-icon"   src={express} alt="express-icon" />  ,
        <img  className="slide-icon"   src={nodejs} alt="nodejs-icon" />  ,
        <img  className="slide-icon"   src={mysql} alt="mysql-icon" />  ,
        <img  className="slide-icon"  src={git} alt="github-icon" />   
    ];

    return (
    <div className='Skills'>
        <div>
            <h2 className="skills-h2-title">Mes compétences</h2>
        </div>
        <div className='carousel'>
        <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>

    </div>
    )
}

export default Skills;