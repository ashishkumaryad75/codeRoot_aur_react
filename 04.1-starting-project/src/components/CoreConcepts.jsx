import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.js";
import Sections from "./Sections.jsx";

function CoreConcepts() {
  return (
    <>
      {/* <Sections id="core-concepts"> */}
      <Sections id="core-concepts" title="Core Concepts">
        {/* <h2>Core Concepts</h2> */}
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </Sections>
    </>
  );
}

export default CoreConcepts;
