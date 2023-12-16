
import React from "react";
import './App.css';
import  Accordion from './components/Accordion'

const accordionInfo = [
  {id: 1, show:false, label: "Some things", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
  {id: 2, show:false, label: "Other things", content: "Lorem ipsum dolor sit amet" },
  {id: 3, show:false, label: "Those things", content: "blah blah blah" }
]

function App() {
  return (
    <div className="App">
      <Accordion accordionInfo={accordionInfo} />
    </div>
  );
}

export default App;