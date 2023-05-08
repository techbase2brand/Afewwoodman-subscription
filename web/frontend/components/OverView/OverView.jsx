import React from 'react';
import './OverView.css';
import OverviewCard from './OverviewCard/OverviewCard';
import OverviewOverviewOrderStatus from './OverViewOrderStatus/OverviewOrderStatus';

const OverView = () => {
  return (
        <div className='OverView-page-os'>
            <div className='OverView-heading-os'>
                <h1>Overview</h1>
                <p>Last 30 days</p>
            </div>
            <OverviewCard />
            <OverviewOverviewOrderStatus />
        </div>
    )
}

export default OverView
