import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Event 1",
  },
  {
    id: "e2",
    title: "Event 2",
  },
  {
    id: "e3",
    title: "Event 3",
  },
];
function EventsPage() {
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id} relative="path">
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
