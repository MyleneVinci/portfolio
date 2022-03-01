import React from 'react';
import saintstagramMockup from '../../assets/pictures/saintstagramMockup.png';
import parisSecretMockup from '../../assets/pictures/parisSecretMockup.png';
import './Project.css';

const Project = () => {
  return (
    <div className='Project'>
        <div>
            <h2 className="project-h2-title">Mes réalisations</h2>
        </div>
        <div className="project-content">
        <div className="project1">
            <a href="https://github.com/MyleneVinci/Paris-secret">
                <img  className='mockup'src={parisSecretMockup} alt="parisSecret-mockup" />
            </a>
            <h3 className='project-h3-title'>Paris Secret - projet 1 Wild Code School</h3>
            <p>Découvrez Paris sous un autre jour, ses balades, ses restaurants... laissez vous guider !</p>
            <p>Projet réalisé en groupe du 29 novembre au 6 décembre 2021, #HTML #CSS #Javascript</p>
        </div>
        <div className="project2">
            <a href="https://github.com/MyleneVinci/Sainstagram">
                <img className='mockup' src={saintstagramMockup} alt="saintstagram-mockup" />
            </a>
            <h3 className='project-h3-title'>Saintstagram - projet 2 Wild Code School</h3>
            <p>Venez partager vos photos avec vos chevaliers du zodiaque préférés sur votre réseau social préféré !</p>
            <p>projet réalisé en groupe du 3 janvier au 28 février 2022, #HTML, #CSS #React</p>
        </div>
        </div>
    </div>
  )
}

export default Project