import React, { useRef, useState } from "react";
import "./App.css";
import inputs from "./json/json.json";

function App() {
  const [elements, setElements] = useState([]);
  const refs = useRef([]);

  const addElement = (data) => {
    setElements((prev) => [
      ...prev,
      {
        name: data.target.name,
        type: data.target.type,
        value: data.target.value,
        id: data.target.id,
      },
    ]);
  };

  const deleteElement = (e) => {
    const newElements = elements.filter((test, index) => e === index);
    console.log(newElements);
    setElements((prev) => [...prev.splice(e, 1)]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Formulario Dinámico</h1>
      </header>
      <main className="App-divide">
        <div className="App-boxSide ">
          <h1 className="App-title">Elementos del Formulario</h1>
          {inputs.map((data, i) => {
            return (
              <div key={i}>
                <input
                  type={data.type}
                  name={data.name}
                  id={i}
                  value={data.value}
                  className="App-Input"
                  onClick={addElement}
                  onChange={(e) => {
                    //console.log(e.target.value);
                  }}
                  ref={(el) => (refs.current[i] = el)}
                />
              </div>
            );
          })}
        </div>
        <div className="App-boxSide">
          <h1 className="App-title">Agregado Dinámico</h1>
          {elements &&
            elements.map((element, key) => {
              return (
                <div key={key}>
                  <input
                    type={element.type}
                    name={element.name}
                    id={element.key}
                  />
                  <button
                    name="deleteElement"
                    id="deleteElement"
                    onClick={() => deleteElement(key)}
                  >
                    Delete Element
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
