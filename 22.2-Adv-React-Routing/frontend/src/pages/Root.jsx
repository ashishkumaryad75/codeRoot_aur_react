import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation.jsx";
// import { useLoaderData } from "react-router-dom";

function RootLayout() {
  // const events = useLoaderData();
  // console.log("events",events);// useLoaderData is not accessible on this level
  
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
