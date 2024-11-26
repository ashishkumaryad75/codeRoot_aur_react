import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopics, setSelectedTopics] = useState(); // hooks are called inside the component and it should be the top of all the functions and data in component.
  function handleSelect(selectedButton) {
    console.log(selectedButton, "Clicked...");
    setSelectedTopics(selectedButton);
  }
  let selectedTab = <p>Please Select A Topic.</p>;
  if (selectedTopics) {
    selectedTab = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopics].title}</h3>
        <p>{EXAMPLES[selectedTopics].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopics].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopics === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components Using Children Props.
            </TabButton>
            <TabButton
              isSelected={selectedTopics === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX Using Children Props.
            </TabButton>
            <TabButton
              isSelected={selectedTopics === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props Using Children Props.
            </TabButton>
            <TabButton
              isSelected={selectedTopics === "state"}
              onSelect={() => handleSelect("state")}
            >
              State Using Children Props.
            </TabButton>
            <TabButton
              isSelected={selectedTopics === "components"}
              onSelect={() => handleSelect("components")}
              label="Components Using Label Props."
            />
          </menu>
          {/* {!selectedTopics ? (
            <p>Please Select A Topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopics].title}</h3>
              <p>{EXAMPLES[selectedTopics].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopics].code}</code>
              </pre>
            </div>
          )} */}
          {/* {!selectedTopics && <p>Please Select A Topic.</p>}{" "}
          {selectedTopics && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopics].title}</h3>
              <p>{EXAMPLES[selectedTopics].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopics].code}</code>
              </pre>
            </div>
          )} */}
          {selectedTab}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
