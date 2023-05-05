import React from 'react';
import './ProductsTable.css';

const ProductsTable = ({ data }) => {
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
                                    <div onClick={()=> {alert("Event fired")}} className="ProductsTable-dots-os">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
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
