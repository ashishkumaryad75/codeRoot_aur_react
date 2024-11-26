import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState("Please Click A Button...");
  function handleSelect(selectedButton) {
    console.log(selectedButton, 'Clicked...');
    setTabContent(selectedButton);
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
            <TabButton onSelect={()=>handleSelect('Components')}>Components Using Children Props.</TabButton>
            <TabButton onSelect={()=>handleSelect('JSX')}>JSX Using Children Props.</TabButton>
            <TabButton onSelect={()=>handleSelect('State')}>State Using Children Props.</TabButton>
            <TabButton onSelect={()=>handleSelect('Props')}>Props Using Children Props.</TabButton>
            <TabButton onSelect={()=>handleSelect('Labeled Components')} label="Components Using Label Props."/>
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
