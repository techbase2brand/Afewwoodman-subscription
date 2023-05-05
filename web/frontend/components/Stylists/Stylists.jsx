import React from 'react';
import './Stylists.css';
import Heading from '../Shared/Heading/Heading';
// import AddProductPopup from '../AddProductPopup/AddProductPopup';

const Stylists = () => {
    return (
        <div className='Stylists-page-os'>
            <div className="Occassions-heading-os">
                <Heading heading="Stylists" text="Groups link" buttonText="Add Group Link" onClick={() => { alert("Event fired") }} selectAll="Select all" />
            </div>
            {/* <AddProductPopup /> */}
        </div>
    )
}

export default Stylists
