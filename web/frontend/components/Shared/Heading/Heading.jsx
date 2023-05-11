import React from 'react';
import './Heading.css';

const Heading = (props) => {
    return (
        <div className='Heading-row-os'>
            <div className="Heading-col-1-os">
                {props.heading && <h2>{props.heading}</h2>}
                {props.text && <p>{props.text}</p>}
            </div>
            <div className="Heading-col-2-os">
                {props.selectAll && <button onClick={props.selectAllOnClick} className='Heading-selectAll-btn-os'>{props.selectAll}</button>}
                {props.buttonText && <button className='Heading-default-btn-os' onClick={props.onClick}>{props.buttonText}</button>}
            </div>
        </div>
    )
}

export default Heading
