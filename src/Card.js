import React from 'react';
import './Card.css';

function Card(props){
    return (
        <div className="spacing">
            <div className="card">
              <div className="card-inner">
                <div
                    className="card-img"
                    style={{
                        'backgroundImage': `url('${props.logo}')`, 
                    }}
                ></div>
                <h1>{props.job.title}</h1>
                <h2>{props.job.position}</h2>
                <p className="description">{props.job.description}</p>
                <div style={{'marginBottom': '20px'}}>
                    <div className="grid">
                        <p className="tag-title">Duration: </p>
                        <p id="tag">{props.job.duration}</p>
                    </div>
                    <div className="grid">
                        <p className="tag-title">Level:</p>
                        <p id="tag">{props.job.level}</p>
                    </div>
                </div>
                <p>Apply by: {props.job.date}</p>
                <div style={{'textAlign': 'right'}}>
                    <a href={`jobs/${props.job.id}`}><i>Learn more  </i>{'>'}</a>
                </div>
              </div>    
            </div>
        </div>
    )
}
export default Card