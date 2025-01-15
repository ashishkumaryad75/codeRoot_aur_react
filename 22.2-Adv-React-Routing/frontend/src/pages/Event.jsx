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

// export async function loader(){
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//     throw new Error("unable to fetch the data");
//   } else {
//     const resData = await response.json();
//     return resData.events;
//   }
// }