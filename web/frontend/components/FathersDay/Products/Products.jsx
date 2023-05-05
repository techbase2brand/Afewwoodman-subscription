import React, { useState, useEffect } from 'react';
import './Products.css';
import ProductsTable from './ProductsTable/ProductsTable';
import ProductsPagination from './ProductsPagination/ProductsPagination';
import ProductsDataArray from './ProductsDataArray/ProductsDataArray';

const Products = () => {
    // State for data fetched from the API
    const [data, setData] = useState([]);
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);



    // Fetch data from the API
    useEffect(() => {
        setData(ProductsDataArray);
        // console.log("table data", ProductsDataArray)
    }, []);

    // Pagination logic
    const maxPageNumber = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <section className='ProductsTable-section-os'>
            <div className="ProductsTable-heading-row-os">
                <h3>Products</h3>
                <h2 onClick={() => { alert("Event fired") }}>Select All</h2>
            </div>
            <ProductsTable data={currentItems} />
            <ProductsPagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
                maxPageNumber={maxPageNumber}
            />
        </section>
    )
}

export default Products
