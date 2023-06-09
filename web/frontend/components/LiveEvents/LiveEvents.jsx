import React, { useState } from 'react';
import './LiveEvents.css';
import Heading from '../Shared/Heading/Heading'
import LiveEventsOnline from './LiveEventsOnline/LiveEventsOnline';
import LiveEventsOffline from './LiveEventsOffline/LiveEventsOffline';
import AddEventPopup from './AddEventPopup/AddEventPopup';

const LiveEvents = () => {
    const [activeAddEventPopup, setActiveAddEventPopup] = useState(false);
    const [activeLiveEvent, setActiveLiveEvent] = useState('online-event-os');
    const handleLiveEvent = (value) => {
        setActiveLiveEvent(value);
    }
    return (
        <div className='LiveEvents-page-os'>
            <div className="Occassions-heading-os">
                <Heading heading="Live Events" text="Online/Offline Events" buttonText="Add Events" onClick={() => { setActiveAddEventPopup(true) }} />
            </div>
            <div className="LiveEvents-online-offline-tabs-row-os">
                <button onClick={() => handleLiveEvent("online-event-os")} className={activeLiveEvent === 'online-event-os' ? "active" : ''}>Online Events</button>
                <button onClick={() => handleLiveEvent("offline-event-os")} className={activeLiveEvent === 'offline-event-os' ? "active" : ''}>Offline Events</button>
            </div>
            <div className="LiveEvents-online-offile-data-row-os">
                {activeLiveEvent === "online-event-os" && <LiveEventsOnline />}
                {activeLiveEvent === "offline-event-os" && <LiveEventsOffline />}
            </div>
            {activeAddEventPopup &&
                <AddEventPopup
                    setActiveAddEventPopup={setActiveAddEventPopup}
                />
            }
        </div>
    )
}

export default LiveEvents
