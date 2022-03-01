import React from 'react';
import avatar from '../../assets/pictures/avatar.png';
import './AboutMe.css';

const AboutMe = () => {
    return (
    <div className='AboutMe'>
        <div>
            <h2 className="aboutMe-h2-title">Qui suis-je ?</h2>
        </div>
        <div className='aboutMe-content'>
            <img className='avatar' src={avatar} alt="my-picture" />
            <div>
                <p className='myPresentation'>
                    Issue d'un Master en physique-chimie, j'ai entamé une reconversion en tant que développeur web à la Wild Code School depuis novembre 2021.<br /> 
                    Grâce à mon expérience professionnelle je sais faire preuve d'autonomie, d'adaptabilité et de persévérance. <br /> 
                    Ma passion pour les loisirs créatifs m'a permis de développer ma créativité et ma patience. <br />
                    J'aime apprendre et ce n'est pas un bout de code qui aura ma peau!</p>
            </div>
        </div>
    </div>
    )
}

export default AboutMe;