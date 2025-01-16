import React from "react";
import {
  useParams,
  useLoaderData,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  // const param = useParams();
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ resquest, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    return json(
      { message: "Could not Fetch details for selected events." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    // method: "delete",
    method: request.method,
  });

  if (!response.ok) {
    return json({ message: "Could not delete the event." }, { status: 500 });
  }
  return redirect("/events");
}
