import React from "react";
import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";

function NewEventPage() {
  // function submitHandler(event){
  //   event.preventDefault();
  // }

  return (
    <>
      <h1>Create a New Event</h1>
      <EventForm />
    </>
  );
}

export default NewEventPage;

export async function action({ request, params }) {
  const formData = await request.formData();

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  // console.log("form data:", eventData);

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    return json({ message: "Could not save event." }, { status: 500 });
  }
  return redirect("/events");
}
