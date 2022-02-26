import React from 'react';
import Card from '../../components/card/Card';
import dataExperiencies from '../../assets/data/dataExperiencies';
import timeline from '../../assets/pictures/timeline.png';
import './Experiencies.css';

const Experiencies = () => {
    return (
    <div className='Experiencies'>
        <div>
            <h2 className="experiencies-h2-title">Mon expérience professionnelle</h2>
        </div>
            <div className="experiencies-card">
                {dataExperiencies.map((data,index) => (
                        <Card
                            key={index}
                            title={data.title}
                            location={data.location}
                            date={data.date}
                            task1={data.task1}
                            task2={data.task2}
                            task3={data.task3}
                            githubLink={data.githubLink}
                            deployedLink={data.deployedLink}
                            technologies={data.technologies}
                        />
                    ))
                }
            </div>
            <div className='timeline-img'>
                <img className='experiencies-img' src={timeline} alt="timeline" />
        </div>
    </div>
    )
}

export default Experiencies;

