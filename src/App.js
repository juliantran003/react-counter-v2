import "./App.css";
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState([<Counter />]);
  return (
    <div className="container">
      <AddCounter
        addCounterStyle={tab.length === 3 ? "hidden" : "addCounterStyle"}
        click={() => {
          const newTab = [...tab];
          {
            newTab.length !== 3 && newTab.push(<Counter />);
          }
          setTab(newTab);
        }}
      />
      <div className="counterContainer">{tab}</div>
    </div>
  );
}

export default App;
