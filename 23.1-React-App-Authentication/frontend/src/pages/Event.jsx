import { useLoaderData, Await, useRouteError } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

// You can handle errors if the loader fails
function EventsPage() {
  const { events } = useLoaderData();
  const error = useRouteError(); // Get error from route-level error handler

  if (error) {
    return <p>{error.message}</p>; // Display error message if there's an error
  }

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response("Could not fetch events.", { status: 500 });
  }

  const resData = await response.json();
  return resData.events;
}

export async function loader() {
  return {
    events: await loadEvents(),
  };
}

// // import { useEffect, useState } from 'react';
// import { useLoaderData, Await } from "react-router-dom";
// import EventsList from "../components/EventsList";
// import { Suspense } from "react";

// function EventsPage() {
//   const { events } = useLoaderData();

//   return (
//     <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
//       <Await resolve={events}>
//         {(loadedEvents) => <EventsList events={loadedEvents} />}
//       </Await>
//     </Suspense>
//   );

//   // const data = useLoaderData();
//   // if (data.isError) {
//   //   return <p>{data.message}</p>;
//   // }
//   // const events = data.events;
//   // return (
//   //   <>
//   //     {/* <div style={{ textAlign: 'center' }}>
//   //       {isLoading && <p>Loading...</p>}
//   //       {error && <p>{error}</p>}
//   //     </div>
//   //     {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}

//   //     <EventsList events={events} />
//   //   </>
//   // );
// }

// export default EventsPage;

// async function loadEvents() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//     // return { isError: true, message: "Could not fetch the events ." };
//     // throw{message :"Could not fetch the events."}
//     // throw new Response(
//     //   JSON.stringify({ message: "Could not Fetch the events." }),
//     //   { status: 500 }
//     // );
//     return json({ message: "Could not Fetch the events." }, { status: 500 });
//     // the json function is provided by the 'react router dom', we do not need to import it manually.
//   } else {
//     // const resData = await response.json();
//     // const res = new Response("any data", { status: 201 });
//     // return res;
//     const resData = await response.json();
//     return resData.events;
//     // return resData.events;
//   }
// }

// export function loader() {
//   return defer({
//     events: loadEvents(),
//   });
// }
