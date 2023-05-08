import React, { useState } from 'react'
import Heading from '../Shared/Heading/Heading'
import Products from './Products/Products';
import AddProductPopup from '../AddProductPopup/AddProductPopup'

const FathersDay = () => {
    const [activeAddProductPopup, setActiveAddProductPopup] = useState(false)
    
    return (
        <div className='FathersDay-page-os'>
            <div className="Occassions-heading-os">
                <Heading heading="Father’s day" text="Current occasions" buttonText="Add Products" onClick={() => { setActiveAddProductPopup(true)}} />
            </div>
            <Products />
            {activeAddProductPopup === true &&
                <AddProductPopup
                    setActiveAddProductPopup={setActiveAddProductPopup}
                />
            }
        </div>
    )
}

export default FathersDay
