import React from 'react'
import { Link } from 'react-router-dom';
import './StylistsCard.css';

const StylistsCard = (props) => {
    return (
        <div className='StylistsCard-col-os'>
            <div className="StylistsCard-checkbox-os">
                <label className="">
                    <input type="checkbox" onChange={props.onChange} checked={props.checked} id={props.id} />
                    <span className="checkmark"></span>
                </label>
            </div>
            {props.image && <div className="StylistsCard-image-os">
                <img src={props.image} alt="" />
            </div>}
            <Link to={props.link}>{props.linkText}</Link>
        </div>
    )
}

export default StylistsCard
