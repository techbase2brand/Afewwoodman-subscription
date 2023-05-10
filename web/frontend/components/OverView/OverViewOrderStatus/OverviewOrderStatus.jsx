import React, { useState, useEffect } from 'react';
import './OverviewOrderStatus.css';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import OverviewOrderDataArray from './OverviewOrderDataArray/OverviewOrderDataArray'
import OverviewOrderTable from './OverviewOrderTable/OverviewOrderTable';
import OverviewOrderPagination from './OverviewOrderPagination/OverviewOrderPagination';

// Images
// import addIcon from '../../Assets/order-add-icon.svg'
import deleteIcon from '../../Assets/order-delete-icon.svg'


const OverviewOverviewOrderStatus = () => {
    // State for data fetched from the API
    const [data, setData] = useState([]);
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);



    // Fetch data from the API
    useEffect(() => {
        // const fetchData = async () => {
        //     const result = await axios('https://jsonplaceholder.typicode.com/users');
        //     setData(result.data);
        // };
        // fetchData();
        setData(OverviewOrderDataArray);
        // console.log("table data", OrderDataArray)
    }, []);

    // Pagination logic
    const maxPageNumber = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <section className='OverviewOrderStatus-section-os'>
            <div className="OverviewOrderStatus-heading-row-os">
                <div className='OverviewOrderStatus-heading-col-1-os'>Order Status</div>
                <div className='OverviewOrderStatus-heading-col-2-os'>
                    <button onClick={() => { alert('Add element') }} className='OverviewOrderStatus-add-btn-os'>
                        <span>
                            {/* <img src={addIcon} alt="" /> */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.61194 15.2239C11.8159 15.2239 15.2239 11.8159 15.2239 7.61194C15.2239 3.40798 11.8159 0 7.61194 0C3.40798 0 0 3.40798 0 7.61194C0 11.8159 3.40798 15.2239 7.61194 15.2239ZM7.61194 13.9552C11.1152 13.9552 13.9552 11.1152 13.9552 7.61194C13.9552 4.10864 11.1152 1.26866 7.61194 1.26866C4.10864 1.26866 1.26866 4.10864 1.26866 7.61194C1.26866 11.1152 4.10864 13.9552 7.61194 13.9552Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.77929 5H7.36226V7.3617H5.00024L5.00024 8.77873H7.36226V11.1405H8.77929V8.77873H11.1407V7.3617H8.77929V5Z" fill="white" />
                            </svg>
                        </span>
                        Add
                    </button>
                    <button onClick={() => { alert('Delete element') }} className='OverviewOrderStatus-delete-btn-os'>
                        <span><img src={deleteIcon} alt="" /></span>
                    </button>
                </div>
            </div>

            <OverviewOrderTable data={currentItems} />
            <OverviewOrderPagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
                maxPageNumber={maxPageNumber}
            />
        </section>
    )
}

export default OverviewOverviewOrderStatus
