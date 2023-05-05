import React from 'react';
import './ProductsPagination.css';

const ProductsPagination = ({ itemsPerPage, totalItems, paginate, currentPage, maxPageNumber }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

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

    const minPageNumber = Math.max(currentPage - 1, 1);
    const maxPageNumberToShow = Math.min(currentPage + 1, maxPageNumber);

    return (
        <section className='ProductsPagination-section-os'>
            <div className="ProductsPagination-row-os">
                <div className="ProductsPagination-col-2-os">
                    <button
                        onClick={handlePrevious}
                        className="page-link"
                        disabled={currentPage === 1}
                    >
                        <span className='ProductsPagination-prevBtn-os'></span>
                    </button>
                    {pageNumbers.slice(minPageNumber - 1, maxPageNumberToShow).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => paginate(pageNumber)}
                            className={`page-link ${pageNumber === currentPage ? 'active' : ''}`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        className="page-link"
                        disabled={currentPage === maxPageNumber}
                    >
                        <span className='ProductsPagination-nextBtn-os'></span>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default ProductsPagination;