import React, { useState } from 'react';
import './AddEventPopup.css';

const AddEventPopup = ({ setActiveAddEventPopup }) => {
    const [activeRadioBtn, setActiveRadioBtn] = useState('online-os');
    const handleRadioBtn = (value) => {
        setActiveRadioBtn(value);
    }

    return (
        <section className='AddOccassionsPopup-section-os AddEventPopup-section-os'>
            <div className="AddOccassionsPopup-row-os">
                <div className="AddOccassionsPopup-heading-os">Add Event</div>
                <div className="AddOccassionsPopup-form-row-os">
                    <div
                        onClick={() => { setActiveAddEventPopup(false) }}
                        className="AddOccassionsPopup-cross-btn-os">
                        X
                    </div>
                    <div className="AddEventPopup-checkbox-row-os">
                        <div className="AddEventPopup-checkbox-os">
                            <label>
                                <input type="radio" name='online-offine'
                                    checked={activeRadioBtn === 'online-os'}
                                    onChange={() => { handleRadioBtn('online-os') }}
                                />
                                <span className="checkmark"></span>
                                Online
                            </label>
                        </div>
                        <div className="AddEventPopup-checkbox-os">
                            <label>
                                <input type="radio" name='online-offine'
                                    checked={activeRadioBtn === 'offline-os'}
                                    onChange={() => { handleRadioBtn('offline-os') }}
                                />
                                <span className="checkmark"></span>
                                Offline
                            </label>
                        </div>
                    </div>
                    {activeRadioBtn === 'online-os' && <div className="AddEventPopup-online-form-data-os">
                        <div className="AddOccassionsPopup-input-os">
                            <label>Title</label>
                            <input type="text" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Date</label>
                            <input type="date" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Time</label>
                            <input type="time" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Location</label>
                            <input type="text" />
                        </div>
                        <button className="AddOccassionsPopup-submit-btn-os">Submit</button>
                    </div>}

                    {activeRadioBtn === 'offline-os' && <div className="AddEventPopup-offline-form-data-os">
                        <div className="AddOccassionsPopup-input-os">
                            <label>Title</label>
                            <input type="text" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Date</label>
                            <input type="date" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Time</label>
                            <input type="time" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Link</label>
                            <input type="text" />
                        </div>
                        <button className="AddOccassionsPopup-submit-btn-os">Submit</button>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default AddEventPopup
