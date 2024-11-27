import React from "react";

function Tabs({ children, buttons, ButtonsContainer ='menu'}) {
    // const ButtonsContainer=buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
