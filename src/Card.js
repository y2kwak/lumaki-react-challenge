import React from 'react';
import './Card.css';

function Card(props){
    return (
        <div className="card">
            <div className="card-inner">
            <h1>
                {props.name}
            </h1>
            <h2>{props.position}</h2>
            <p className="description">
                {props.description}
            </p>
            <div className="tag">
                <p className="tag-title">
                    Duration: </p>
                <p id="tag">{props.duration}</p>
            </div>
            <div className="tag">
                <p className="tag-title">
                    Level:</p>
                <p id="tag">{props.level}</p>
            </div>
                <p>Apply by: {props.date}</p>
            
            <p style={{textAlign: 'right'}}><i>Learn more</i></p>
            </div>
            
        </div>
    )
}
export default Card