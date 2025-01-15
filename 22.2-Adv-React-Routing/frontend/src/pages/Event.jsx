// import { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
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
    // return { isError: true, message: "Could not fetch the events ." };
    // throw{message :"Could not fetch the events."}
    // throw new Response(
    //   JSON.stringify({ message: "Could not Fetch the events." }),
    //   { status: 500 }
    // );
    return json({ message: "Could not Fetch the events." }, { status: 500 });
    // the json function is provided by the 'react router dom', we do not need to import it manually.
  } else {
    // const resData = await response.json();
    // const res = new Response("any data", { status: 201 });
    // return res;
    return response;
    // return resData.events;
  }
}
