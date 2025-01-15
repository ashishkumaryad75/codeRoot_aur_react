// import { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
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

export async function loader() {
  //can not use the hooks inside the loader but can use any browser feature inside the loader.
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Error("unable to fetch the data");
  } else {
    // const resData = await response.json();
    // const res = new Response("any data", { status: 201 });
    // return res;
    return response;
    // return resData.events;
  }
}
