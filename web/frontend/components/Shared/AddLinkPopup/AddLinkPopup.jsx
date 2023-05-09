import React from 'react'

const AddLinkPopup = ({setActiveAddEventPopup}) => {
  return (
    <section className='AddOccassionsPopup-section-os AddLinkPopup-section-os'>
            <div className="AddOccassionsPopup-row-os">
                <div className="AddOccassionsPopup-heading-os">Add Event</div>
                <div className="AddOccassionsPopup-form-row-os">
                    <div
                        onClick={() => { setActiveAddEventPopup(false) }}
                        className="AddOccassionsPopup-cross-btn-os">
                        X
                    </div>
                    
                    <div className="AddEventPopup-online-form-data-os">
                        <div className="AddOccassionsPopup-input-os">
                            {/* <label>Title</label> */}
                            <input type="text" placeholder='Group Name' />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            {/* <label>Date</label> */}
                            <input type="text" placeholder='Group link' />
                        </div>
                        <button className="AddOccassionsPopup-submit-btn-os">Submit</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AddLinkPopup
