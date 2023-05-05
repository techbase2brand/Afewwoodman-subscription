import React from 'react';
import './OverView.css';
import OverviewCard from './OverviewCard/OverviewCard';
import OrderStatus from './OrderStatus/OrderStatus';

const OverView = () => {
  return (
        <div className='OverView-page-os'>
            <div className='OverView-heading-os'>
                <h1>Overview</h1>
                <p>Last 30 days</p>
            </div>
            <OverviewCard />
            <OrderStatus />
        </div>
    )
}

export default OverView
