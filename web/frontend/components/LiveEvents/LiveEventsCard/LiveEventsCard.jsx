import React from 'react';
import './LiveEventsCard.css';

const LiveEventsCard = (props) => {
    return (
        <div className='LiveEventsCard-row-os'>
            <div className="LiveEventsCard-col-1-os">
                <img src={props.image} alt="" />
            </div>
            <div className="LiveEventsCard-col-2-os">
                <h5>{props.heading}</h5>
                <p>{props.date} at {props.time}</p>
                <h6>{props.text}</h6>
            </div>
        </div>
    )
}

export default LiveEventsCard
