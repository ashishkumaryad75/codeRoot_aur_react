import React from "react";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
