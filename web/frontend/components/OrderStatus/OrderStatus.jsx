import React, { useEffect, useState } from 'react';
import OrderStatusArray from './OrderStatusArray/OrderStatusArray';
import './OrderStatus.css';
import OrderStatusTable from './OrderStatusTable/OrderStatusTable';
import OrderStatusPagination from './OrderStatusPagination/OrderStatusPagination';


// Images
import addIcon from '../Assets/order-add-icon.svg'

const OrderStatus = () => {
    // State for data fetched from the API
    const [data, setData] = useState([]);
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);



    // Fetch data from the API
    useEffect(() => {
        setData(OrderStatusArray);
        // console.log("table data", OrderDataArray)
    }, []);

    // Pagination logic
    const maxPageNumber = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='OrderStatus-page-os'>
            <div className="OrderStatus-heading-row-os">
                <h2>Order Status</h2>
                <button onClick={() => { alert('Add element') }} className='OrderStatus-add-btn-os'>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.61194 15.2239C11.8159 15.2239 15.2239 11.8159 15.2239 7.61194C15.2239 3.40798 11.8159 0 7.61194 0C3.40798 0 0 3.40798 0 7.61194C0 11.8159 3.40798 15.2239 7.61194 15.2239ZM7.61194 13.9552C11.1152 13.9552 13.9552 11.1152 13.9552 7.61194C13.9552 4.10864 11.1152 1.26866 7.61194 1.26866C4.10864 1.26866 1.26866 4.10864 1.26866 7.61194C1.26866 11.1152 4.10864 13.9552 7.61194 13.9552Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.77929 5H7.36226V7.3617H5.00024L5.00024 8.77873H7.36226V11.1405H8.77929V8.77873H11.1407V7.3617H8.77929V5Z" fill="white" />
                        </svg>
                    </span>
                    Add Orders
                </button>
            </div>
            <OrderStatusTable
                data={currentItems}
            />
            <OrderStatusPagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
                maxPageNumber={maxPageNumber}
            />
        </div>
    )
}

export default OrderStatus
