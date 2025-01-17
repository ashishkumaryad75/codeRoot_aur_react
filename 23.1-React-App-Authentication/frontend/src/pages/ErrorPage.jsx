import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occured!";
  let message = "Something wenrt wrong!!..";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message; //json itself will parse it, no need to parse it manually .
  }
  if (error.status === 404) {
    title = "Not Found!!.";
    message = "Could Not found the resource or the page..";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
