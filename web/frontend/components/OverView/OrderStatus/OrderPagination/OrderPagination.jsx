import React from 'react';

const OrderPagination = ({ itemsPerPage, totalItems, paginate, currentPage, maxPageNumber }) => {
    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    const handlePrevious = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < maxPageNumber) {
            paginate(currentPage + 1);
        }
    };
    return (
        <section className='OrderPagination-section-os'>
            <div className="OrderPagination-row-os">
                <div className='OrderPagination-col-1-os'>Showing {currentPage} of {maxPageNumber} results</div>
                <div className="OrderPagination-col-2-os">
                    {/* {pageNumbers.map((number) => (
                        <div key={number} className="page-item">
                            <button
                                onClick={() => paginate(number)}
                                className={`page-link ${currentPage === number ? 'active' : ''}`}
                            >
                                {number}
                            </button>
                        </div>
                    ))} */}
                    <button
                        onClick={handlePrevious}
                        className="page-link"
                        disabled={currentPage === 1}
                    >
                        <span className='OrderPagination-prevBtn-os'></span>
                    </button>
                    <button
                        onClick={handleNext}
                        className="page-link"
                        disabled={currentPage === maxPageNumber}
                    >
                        <span className='OrderPagination-nextBtn-os'></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OrderPagination
