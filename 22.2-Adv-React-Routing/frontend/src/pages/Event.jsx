// import { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import EventsList from '../components/EventsList';

function EventsPage() {
  
const events = useLoaderData();

  return (
    <>
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
    
    <EventsList events={events} />
    </>
  );
}

export default EventsPage;
