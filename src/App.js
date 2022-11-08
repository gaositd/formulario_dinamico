import React, { useEffect, useState } from "react";
import "./App.css";
import inputs from "./json/json.json";

function App() {
  const [elements, setElements] = useState([
    {
      name: "",
      type: "",
      value: "",
    },
  ]);

  const addElement = (data) => {
    setElements((elements) => ({
      ...elements,
      [data.name]: data.value,
    }));
  };

  const deleteElement = (e) => {
    alert(e.target.value);
  };

  useEffect(() => {
    // console.log(elements);
  }, [elements]);

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
              <div key={data.key}>
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
                />
              </div>
            );
          })}
        </div>
        <div className="App-boxSide">
          <h1 className="App-title">Agregado Dinámico</h1>
          {elements.length > 1
            ? elements.map((element, key) => {
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
                      onClick={(element) => deleteElement(element)}
                    >
                      Delete Element
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </main>
    </div>
  );
}

export default App;
