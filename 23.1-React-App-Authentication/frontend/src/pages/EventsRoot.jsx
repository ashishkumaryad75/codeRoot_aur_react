import React from "react";
import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />{" "}
        <Outlet />
      {/* <main>
      </main> */}
    </>
  );
}

export default EventsRootLayout;
