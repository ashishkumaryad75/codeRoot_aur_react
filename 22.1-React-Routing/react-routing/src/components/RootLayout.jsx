import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";
import classes from "./RootLayout.Module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
