import React from "react";
import { Outlet, useNavigation } from "react-router";
import MainNavigation from "../components/MainNavigation.jsx";
// import { useLoaderData } from "react-router-dom";

function RootLayout() {
  // const events = useLoaderData();
  // console.log("events",events);// useLoaderData is not accessible on this level

  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading ....</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
