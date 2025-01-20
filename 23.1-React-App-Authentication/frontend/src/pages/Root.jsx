import React, { useEffect } from "react";
import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router";
import MainNavigation from "../components/MainNavigation.jsx";
import { getTokenDuration } from "../util/auth.js";
// import { useLoaderData } from "react-router-dom";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
    }

    const tokenDuration = getTokenDuration();
    console.log("tokenDuration----------->", tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

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
