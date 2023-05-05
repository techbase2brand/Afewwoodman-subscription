import React from 'react'
import Heading from '../Shared/Heading/Heading'
import Products from './Products/Products'

const FathersDay = () => {
    return (
        <div className='FathersDay-page-os'>
            <div className="Occassions-heading-os">
                <Heading heading="Father’s day" text="Current occasions" buttonText="Add Products" onClick={() => { alert("Event fired") }} />
            </div>
            <Products />
        </div>
    )
}

export default FathersDay
