import React from 'react';
import Card from '../../components/card/Card';
import dataTraining from '../../assets/data/dataTraining';
import timeline from '../../assets/pictures/timeline.png'; 
import './Training.css';

const Training = () => {
    return (
    <div className='Training'>
        <div>
            <h2 className="training-h2-title">Ma formation</h2>
        </div>
        <div className="training-card">
        {dataTraining.map((data,index) => (
                <Card 
                    key={index}
                    title={data.title}
                    location={data.location}
                    date={data.date}
                    description={data.description}
                />
            ))
        }
        </div>
        <div className='timeline-img'>
            <img className='training-img' src={timeline} alt="timeline" />
        </div>
    </div>
    )
}

export default Training;