import React, { useState } from 'react';
import '../OrderStatus.css';
import EditDeletePopup from '../../Shared/EditDeletePopup/EditDeletePopup';
import OutsideClickHandler from "react-outside-click-handler";


const OrderStatusTable = ({ data }) => {
    const [activePopupId, setActivePopupId] = useState(false);

    const togglePopup = (id) => {
        if (activePopupId === id) {
            setActivePopupId(false);
            console.log("hide popup");
        } else {
            setActivePopupId(id);
            console.log("show popup");
        }
        // setActivePopupId(prevId => prevId === id ? false : id);
    };


    return (
        <section className='OverviewOrderTable-section-os'>
            <div className='table-wrapper'>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Product Name</th>
                            <th>Customer</th>
                            <th>Ship</th>
                            <th>Price</th>
                            <th>Quantiry</th>
                            <th className='OverviewOrderTable-status-heading-os'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.sno}</td>
                                <td>{item.productName}</td>
                                <td><img src={item.productImage} alt="" /></td>
                                <td>{item.customer}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
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

export default OrderStatusTable