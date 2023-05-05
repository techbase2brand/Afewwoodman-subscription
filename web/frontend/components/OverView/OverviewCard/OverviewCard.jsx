import React from 'react';
import './OverviewCard.css'

const OverviewCard = () => {
    return (
        <section className='OverviewCard-section-os'>
            <div className="OverviewCard-row-os">
                <div className="OverviewCard-col-os OverviewCard-col-1-os">
                    <p>Revenue</p>
                    <h1>$3,45,233</h1>
                </div>
                <div className="OverviewCard-col-os OverviewCard-col-2-os">
                    <p>Unique Impressions</p>
                    <h1>252</h1>
                </div>
                <div className="OverviewCard-col-os OverviewCard-col-3-os">
                    <p>Conversion Rate</p>
                    <h1>14%</h1>
                </div>
                <div className="OverviewCard-col-os OverviewCard-col-4-os">
                    <p>Total Products Sold</p>
                    <h1>4,23,342</h1>
                </div>
            </div>
        </section>
    )
}

export default OverviewCard;
