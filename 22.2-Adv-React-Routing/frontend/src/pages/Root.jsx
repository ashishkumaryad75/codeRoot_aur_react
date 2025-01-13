import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation.jsx";

function RootLayout() {
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
