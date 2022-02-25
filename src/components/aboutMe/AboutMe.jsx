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
            <div className='myPresentation'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam accusantium ut, rem esse iusto quas obcaecati, soluta dolore alias corrupti cumque eligendi vero fugiat magni ea non nisi ratione. Iusto aliquam corrupti hic et numquam dolorem blanditiis repellendus cum ea similique perferendis veniam, rerum, rem repudiandae illo maxime. Atque praesentium maiores, quisquam quia non similique delectus est veritatis. Quis laboriosam laudantium fugit, atque ea eum minima natus nemo repudiandae hic unde tempora pariatur dignissimos eaque aliquid nostrum maiores rerum quo ut consequatur quam omnis! Repellendus odio officiis saepe adipisci vel consequuntur nisi fugit delectus, quas, est quia ipsum. Voluptates, odio! Architecto, corrupti nemo odio, esse provident incidunt illo voluptatum consequuntur mollitia molestiae suscipit maiores, vel reiciendis soluta quibusdam fugiat quis nam eligendi. Officiis explicabo iste reprehenderit cumque blanditiis pariatur nostrum dolore necessitatibus, iure dolores voluptatem at, quaerat expedita consectetur error eligendi amet, veritatis natus quos quo sequi? Fugiat, sapiente.</p>
            </div>
        </div>
    </div>
    )
}

export default AboutMe