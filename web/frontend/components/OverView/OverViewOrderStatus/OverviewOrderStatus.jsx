import React, { useState, useEffect } from 'react';
import './OverviewOrderStatus.css';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import OverviewOrderDataArray from './OverviewOrderDataArray/OverviewOrderDataArray'
import OverviewOrderTable from './OverviewOrderTable/OverviewOrderTable';
import OverviewOrderPagination from './OverviewOrderPagination/OverviewOrderPagination';

// Images
import addIcon from '../../Assets/order-add-icon.svg'
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
                        <span><img src={addIcon} alt="" /></span>
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
