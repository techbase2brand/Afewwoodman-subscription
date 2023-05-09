import React, { useState } from 'react';
import './ProductsTable.css';
import OutsideClickHandler from "react-outside-click-handler";
import EditDeletePopup from '../../../Shared/EditDeletePopup/EditDeletePopup';

const ProductsTable = ({ data }) => {
    const [activePopupId, setActivePopupId] = useState(false);

    const togglePopup = (id) => {
        if (activePopupId === id) {
            setActivePopupId(false);
            console.log("hide popup");
        } else {
            setActivePopupId(id);
            console.log("show popup");
        }
    };
    return (
        <section className='ProductsTable-section-os'>
            <div className='table-wrapper'>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Images</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.productName}</td>
                                <td><img src={item.productImage} alt="" /></td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <OutsideClickHandler
                                        onOutsideClick={() => {
                                            if (activePopupId === item.id) {
                                                setActivePopupId(false)
                                            }
                                        }}
                                    >
                                        <div className="popup-dot-os">
                                            <div
                                                onClick={() => {
                                                    // togglePopup(item.id)
                                                    alert('Event fired')
                                                }}
                                                className="ProductsTable-dots-os">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            {activePopupId === item.id &&
                                                <EditDeletePopup />
                                            }
                                        </div>
                                    </OutsideClickHandler>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default ProductsTable
