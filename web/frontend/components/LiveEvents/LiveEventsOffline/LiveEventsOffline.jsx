import React, { useState, useEffect } from 'react';
import LiveEventsCard from '../LiveEventsCard/LiveEventsCard';
import OnlinePagination from '../LiveEventsOnline/OnlinePagination/OnlinePagination';
import OfflineDataArray from './OfflineDataArray/OfflineDataArray'

const LiveEventsOffline = () => {
    // State for data fetched from the API
    const [data, setData] = useState([]);
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);



    // Fetch data from the API
    useEffect(() => {
        setData(OfflineDataArray);
    }, []);

    // Pagination logic
    const maxPageNumber = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <div className='LiveEventsOnline-row-os'>
                {currentItems?.map((item, index) => {
                    return (
                        <div key={index} className="">
                            <LiveEventsCard
                                image={item.image}
                                heading={item.heading}
                                date={item.date}
                                time={item.time}
                                text={item.text}
                            />
                        </div>
                    )
                })}
            </div>
            <OnlinePagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
                maxPageNumber={maxPageNumber}
            />
        </>
    )
}
export default LiveEventsOffline
