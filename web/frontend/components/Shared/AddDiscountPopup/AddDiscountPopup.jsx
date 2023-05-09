import React from 'react'

const AddDiscountPopup = ({setActiveAddEventPopup}) => {
  return (
    <section className='AddOccassionsPopup-section-os AddDiscountPopup-section-os'>
            <div className="AddOccassionsPopup-row-os">
                <div className="AddOccassionsPopup-heading-os">Add Special Discount</div>
                <div className="AddOccassionsPopup-form-row-os">
                    <div
                        // onClick={() => { setActiveAddEventPopup(false) }}
                        className="AddOccassionsPopup-cross-btn-os">
                        X
                    </div>
                    <div className="AddEventPopup-online-form-data-os">
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
                            <input type="text" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Valid Date</label>
                            <input type="date" />
                        </div>
                        <div className="AddOccassionsPopup-input-os">
                            <label>Coupon Code</label>
                            <input type="number" />
                        </div>
                        <button className="AddOccassionsPopup-submit-btn-os">Submit</button>
                    </div>         
                </div>
            </div>
        </section>
  )
}

export default AddDiscountPopup
