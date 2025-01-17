import React from "react";
import EventForm from "../components/EventForm";
// import { redirect } from "react-router-dom";

function NewEventPage() {
  // function submitHandler(event){
  //   event.preventDefault();
  // }

  return (
    <>
      <h1>Create a New Event</h1>
      <EventForm method="POST" />
    </>
  );
}

export default NewEventPage;
