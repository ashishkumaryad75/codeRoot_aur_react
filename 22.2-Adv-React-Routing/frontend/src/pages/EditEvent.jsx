import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

export default function EditEventPage() {
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventForm method={""} event={data.event} />
    </>
  );
}
