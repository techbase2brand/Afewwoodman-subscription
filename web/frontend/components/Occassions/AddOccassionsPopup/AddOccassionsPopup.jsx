import React, { useContext } from 'react';
import './AddOccassionsPopup.css';
// import { AddOccassionPopupContext } from '../Occassions'

const AddOccassionsPopup = ({setActiveAddOccassionsPopup}) => {
    return (
        <section className='AddOccassionsPopup-section-os'>
            <div className="AddOccassionsPopup-row-os">
                <div className="AddOccassionsPopup-heading-os">Add Occasion</div>
                <div className="AddOccassionsPopup-form-row-os">
                    <div onClick={() => {
                        setActiveAddOccassionsPopup(false)
                    }}
                        className="AddOccassionsPopup-cross-btn-os">X</div>
                    <div className="AddOccassionsPopup-input-os">
                        <label>Title</label>
                        <input type="text" />
                    </div>
                    <div className="AddOccassionsPopup-input-os">
                        <label>Description</label>
                        <input type="text" />
                    </div>
                    <div className="AddOccassionsPopup-input-os">
                        <label>Discount</label>
                        <input type="number" />
                    </div>
                    <button className="AddOccassionsPopup-submit-btn-os">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default AddOccassionsPopup
