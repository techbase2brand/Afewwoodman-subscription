import React from 'react';
import './OccassionsCard.css';
import { Link } from 'react-router-dom';

const OccassionsCard = (props) => {
    return (
        <Link to={props.link} className="OccassionsCard-col-os">
            <div className="OccassionsCard-image-os">
                {props.image && <img src={props.image} alt="" />}
            </div>
            <div className="OccassionsCard-content-os">
                {props.heading && <h2>{props.heading}</h2>}
                {props.text && <p>{props.text}</p>}
            </div>
        </Link>
    )
}

export default OccassionsCard
