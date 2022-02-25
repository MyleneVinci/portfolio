import React from 'react';
import linkedin from '../../assets/pictures/linkedin.png';
import Github from '../../assets/pictures/Github.png';
import './Contact.css';

const Contact = () => {
    return (
    <div className='Contact'>
        <div>
            <h2 className="contact-h2-title">Contact</h2>
        </div>
        <div className='contact-content'>
            <div className='text-container'>
                <p>Pour me contacter rien de plus simple!</p>
                <p><a href="mailto:mylene.vinci@gmail.com">mylene.vinci@gmail.com</a></p>
                <p><a href="tel:+33620207163">06.20.20.71.63.</a></p>
            </div>
            <div className='logo-container'>
                <p><a href="https://www.linkedin.com/in/mylene-vinci/" className="link"><img className='logo' src={linkedin} alt="logo" /></a></p>
                <p><a href="https://github.com/MyleneVinci" className="link"><img className='logo' src={Github} alt="logo" /></a></p>
            </div>
        </div>
    </div>
    )
}

export default Contact