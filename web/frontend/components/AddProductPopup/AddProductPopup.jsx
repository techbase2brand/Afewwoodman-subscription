import React from 'react';
import './AddProductPopup.css';
import productImg from '../Assets/fathersDay-img1.png';

const AddProductPopup = () => {
    return (
        <section className='AddProductPopup-section-os'>
            <div className="AddProductPopup-main-os">
                <div className="AddProductPopup-heading-row-os">
                    <h3>Add Product</h3>
                    <div className="AddProductPopup-cross-btn-os">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="AddProductPopup-search-os">
                    <span>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.78955 2.78877C4.57567 1.00315 6.99816 0 9.52412 0C12.0501 0 14.4726 1.00315 16.2587 2.78877C18.0448 4.57439 19.0482 6.99621 19.0482 9.52146C19.0482 12.0467 18.0448 14.4685 16.2587 16.2541C14.4726 18.0398 12.0501 19.0429 9.52412 19.0429C6.99816 19.0429 4.57567 18.0398 2.78955 16.2541C1.00343 14.4685 0 12.0467 0 9.52146C0 6.99621 1.00343 4.57439 2.78955 2.78877ZM9.52412 1.46484C7.38677 1.46484 5.33697 2.31366 3.82564 3.82457C2.31431 5.33548 1.46525 7.38471 1.46525 9.52146C1.46525 11.6582 2.31431 13.7074 3.82564 15.2183C5.33697 16.7293 7.38677 17.5781 9.52412 17.5781C11.6615 17.5781 13.7113 16.7293 15.2226 15.2183C16.7339 13.7074 17.583 11.6582 17.583 9.52146C17.583 7.38471 16.7339 5.33548 15.2226 3.82457C13.7113 2.31366 11.6615 1.46484 9.52412 1.46484ZM9.52412 6.34764C9.92873 6.34764 10.2567 6.67555 10.2567 7.08006V8.78904H11.9662C12.3708 8.78904 12.6988 9.11695 12.6988 9.52146C12.6988 9.92596 12.3708 10.2539 11.9662 10.2539H10.2567V11.9629C10.2567 12.3674 9.92873 12.6953 9.52412 12.6953C9.1195 12.6953 8.79149 12.3674 8.79149 11.9629V10.2539H7.08204C6.67742 10.2539 6.34941 9.92596 6.34941 9.52146C6.34941 9.11695 6.67742 8.78904 7.08204 8.78904H8.79149V7.08006C8.79149 6.67555 9.1195 6.34764 9.52412 6.34764ZM16.82 17.1915C17.2326 16.6188 17.909 16.3224 18.6607 16.3281C18.6618 16.3281 18.6628 16.3281 18.6639 16.3281L18.6575 17.0605V16.3281C18.6586 16.3281 18.6596 16.3281 18.6607 16.3281C19.5507 16.3288 20.3895 16.6372 20.7894 17.3837C21.1895 18.1306 20.9808 19.0004 20.4889 19.7411L20.4888 19.7412C19.971 20.5205 19.2151 21.1032 18.3306 20.9847C17.446 20.8661 16.8699 20.1048 16.5749 19.2146L16.5747 19.214C16.3389 18.5002 16.4078 17.7637 16.82 17.1915ZM17.9661 18.7546C18.1888 19.4264 18.4623 19.5244 18.5253 19.5328C18.5883 19.5413 18.8776 19.5185 19.2682 18.9307M17.9661 18.7546C17.8502 18.404 17.9181 18.1737 18.009 18.0476C18.0988 17.923 18.2905 17.7897 18.6511 17.7929V17.7929H18.6575C19.2706 17.7929 19.456 17.9974 19.4977 18.0752C19.5396 18.1535 19.6065 18.4214 19.2683 18.9306" fill="#757575" />
                        </svg>
                    </span>
                    <input type="search" placeholder='Search Product' />
                </div>
                <div className="AddProductPopup-product-os">
                    <div className="multiple-filters-checkbox-col-1-os">
                        <div className="">
                            <label className="AddProductPopup-checkbox-os">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="AddProductPopup-product-image-os">
                            <img src={productImg} alt="" />
                        </div>
                        <div className="AddProductPopup-product-name-os">The Chadwick</div>
                    </div>
                    <div className="multiple-filters-checkbox-col-2-os">$123.00</div>
                </div>

            </div>
        </section>
    )
}

export default AddProductPopup
