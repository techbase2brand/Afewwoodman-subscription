import React from 'react';
import './OverviewOrderTable.css';

const OverviewOrderTable = ({ data }) => {
    // console.log("data", data)
    return (
        <section className='OverviewOrderTable-section-os'>
            <div className='table-wrapper'>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Ship</th>
                            <th>Best Price</th>
                            <th>Purchased Price</th>
                            <th className='OverviewOrderTable-status-heading-os'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.invoice}</td>
                                    <td>{item.customer}</td>
                                    <td>{item.ship}</td>
                                    <td>{item.bestPrice}</td>
                                    <td>{item.purchasedPrice}</td>
                                    <td>
                                        <div className={`OverviewOrderTable-status-data-os ${item.status === 'Open' ? 'Open' : item.status === 'Progress' ? 'Progress' : item.status === 'On Hold' ? 'On Hold' : null}`}
                                        >
                                            {item.status === 'Open' ? 'Open' : item.status === 'Progress' ? 'Progress' : item.status === 'On Hold' ? 'On Hold' : null}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default OverviewOrderTable
