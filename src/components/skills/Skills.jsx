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
        <div className="skills-contents">
            {/* <Carousel slides={slides} autoplay={false} interval={1000} /> */}
            <p className='my-skills'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam accusantium ut, rem esse iusto quas obcaecati, soluta dolore alias corrupti cumque eligendi vero fugiat magni ea non nisi ratione. Iusto aliquam corrupti hic et numquam dolorem blanditiis repellendus cum ea similique perferendis veniam, rerum, rem repudiandae illo maxime. Atque praesentium maiores, quisquam quia non similique delectus est veritatis. Quis laboriosam laudantium fugit, atque ea eum minima natus nemo repudiandae hic unde tempora pariatur dignissimos eaque aliquid nostrum maiores rerum quo ut consequatur quam omnis! Repellendus odio officiis saepe adipisci vel consequuntur nisi fugit delectus, quas, est quia ipsum. Voluptates, odio! Architecto, corrupti nemo odio, esse provident incidunt illo voluptatum consequuntur mollitia molestiae suscipit maiores, vel reiciendis soluta quibusdam fugiat quis nam eligendi. Officiis explicabo iste reprehenderit cumque blanditiis pariatur nostrum dolore necessitatibus, iure dolores voluptatem at, quaerat expedita consectetur error eligendi amet, veritatis natus quos quo sequi? Fugiat, sapiente.</p>
        </div>
    </div>
    )
}

export default Skills;