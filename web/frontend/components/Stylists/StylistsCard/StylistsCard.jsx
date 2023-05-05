import React from 'react'
import { Link } from 'react-router-dom'

const StylistsCard = () => {
    return (
        <div className='StylistsCard-col-os'>
            {props.image && <div className="StylistsCard-image-os">
                <img src={props.image} alt="" />
            </div>}
            <Link to={props.link}>{props.linkText}</Link>
        </div>
    )
}

export default StylistsCard
