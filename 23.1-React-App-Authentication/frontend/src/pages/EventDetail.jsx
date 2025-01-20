import React, { Suspense } from "react";
import {
  useParams,
  useLoaderData,
  useRouteLoaderData,
  redirect,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { getAuthToken } from "../util/auth";

function EventDetailPage() {
  // const param = useParams();
  // const data = useLoaderData();

  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={event} />
      <EventsList events={events} />

      {/* the bellow code is not woring in this senariaos so we will use simple one as used above */}
      {/* <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await response={Promise.resolve(event)}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense> */}
      {/* <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await response={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense> */}
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    return json(
      { message: "Could not Fetch details for selected events." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response("Could not fetch events.", { status: 500 });
  }

  const resData = await response.json();
  return resData.events;
}

export async function loader({ resquest, params }) {
  const eventId = params.eventId;

  return {
    // when we send the both the data wrapping like this,
    // we have to use await for both the events,
    //if we avoid for any one of them then the UI will be break,
    // and the event will never be resolve and promise also reject for
    //-both the event evne we are not using fo rone of them.
    event: await loadEvent(eventId),
    events: await loadEvents(),
  };
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const token = getAuthToken();

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    // method: "delete",
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    return json({ message: "Could not delete the event." }, { status: 500 });
  }
  return redirect("/events");
}
