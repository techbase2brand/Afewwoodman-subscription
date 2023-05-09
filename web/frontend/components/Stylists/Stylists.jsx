import React, { useEffect, useState } from 'react';
import './Stylists.css';
import Heading from '../Shared/Heading/Heading';
import StylistsCard from './StylistsCard/StylistsCard';
import StylistsArray from './StylistsArray/StylistsArray';
import StylistsPagination from './StylistsPagination/StylistsPagination';
import AddLinkPopup from '../Shared/AddLinkPopup/AddLinkPopup';

const Stylists = () => {
    const [activeAddLinkPopup, setActiveAddEventPopup] = useState(false);
    const [checkedArray, setCheckedArray] = useState([]);
    // State for data fetched from the API
    const [data, setData] = useState([]);
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);



    // Fetch data from the API
    useEffect(() => {
        setData(StylistsArray);
    }, []);

    // Pagination logic
    const maxPageNumber = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCheckbox = (value) => {
        if (checkedArray.includes(value)) {
            setCheckedArray(checkedArray.filter(item => item !== value));
        } else {
            setCheckedArray([...checkedArray, value]);
        }
    }
    console.log("checked dataArray", checkedArray);


    return (
        <div className='Stylists-page-os'>
            <div className="Occassions-heading-os">
                <Heading heading="Stylists" text="Groups link" buttonText="Add Group Link" onClick={() => {
                    setActiveAddEventPopup(true)
                    // alert('Event fired')
                }}
                    selectAll="Select all" />
            </div>
            <div className="Stylists-card-row-os">
                {currentItems?.map((items, index) => {
                    return (
                        <StylistsCard
                            key={index}
                            id={items.id}
                            image={items.image}
                            linkText={items.linkText}
                            onChange={() => { handleCheckbox(items.id) }}
                            checked={checkedArray.includes(items.id)}
                        />
                    )
                })}
            </div>
            <StylistsPagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
                maxPageNumber={maxPageNumber}
            />
            {activeAddLinkPopup &&
                <AddLinkPopup
                    setActiveAddEventPopup={setActiveAddEventPopup}
                />
            }
        </div>
    )
}

export default Stylists
