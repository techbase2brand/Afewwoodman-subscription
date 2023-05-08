import React, { useState } from 'react'
import Heading from '../Shared/Heading/Heading'
import OccassionsCard from './OccassionsCard/OccassionsCard';
import './Occassions.css';


// Images
import cardImg1 from '../Assets/occassions-img1.png';
import cardImg2 from '../Assets/occassions-img2.png';
import cardImg3 from '../Assets/occassions-img3.png';
import cardImg4 from '../Assets/occassions-img4.png';
import cardImg5 from '../Assets/occassions-img5.png';
import cardImg6 from '../Assets/occassions-img6.png';
import AddOccassionsPopup from './AddOccassionsPopup/AddOccassionsPopup';

const Occassions = () => {
    const [activeAddOccassionsPopup, setActiveAddOccassionsPopup] = useState(false)

    return (
        <div className='Occassions-page-os'>
            <div className="Occassions-heading-os">
                <Heading heading="Occassions" text="Current occasions" buttonText="Add Occasions" onClick={() => { setActiveAddOccassionsPopup(true) }} />
            </div>
            <div className="Occassions-card-row-os">
                <OccassionsCard link={'/fathersday'} image={cardImg1} heading="Father’s day" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg2} heading="Valentine’s day" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg3} heading="Sweetest day" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg4} heading="Birthday" text="Product-6" />

                <OccassionsCard link={'/#'} image={cardImg5} heading="Christmas" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg6} heading="Anniversary" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg3} heading="Sweetest day" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg4} heading="Birthday" text="Product-6" />

                <OccassionsCard link={'/#'} image={cardImg1} heading="Father’s day" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg2} heading="Valentine’s day" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg5} heading="Christmas" text="Product-6" />
                <OccassionsCard link={'/#'} image={cardImg6} heading="Anniversary" text="Product-6" />
            </div>

            {activeAddOccassionsPopup &&
                <AddOccassionsPopup
                    setActiveAddOccassionsPopup={setActiveAddOccassionsPopup}
                />}
        </div>
    )
}

export default Occassions
