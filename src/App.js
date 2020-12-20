import React, { useState } from "react";
import "./styles.css";

var bikanerPlaces = {
  temples: ["Lakshminath ji", "bhandhasar"],

  parks: ["Science park", "bhraman path"],

  restaurants: ["crystal", "Indra"]
};

var places = Object.keys(bikanerPlaces);

export default function App() {
  var [options, setOptions] = useState("temples");

  function setCategory(category) {
    var chosenCategory = category;
    setOptions(chosenCategory);
  }

  return (
    <div className="App">
      <h1>Traveller</h1>

      <h2>Bikaner Special</h2>
      <div>
        Choose from the categories below to know the options available :-{" "}
      </div>
      {places.map((item) => {
        return (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "0.5rem",
              margin: "1rem",
              cursor: "pointer"
            }}
          >
            {item}
          </button>
        );
      })}

      <hr />

      <div style={{ margin: "3rem" }}>
        {"The options available are :- "}
        {bikanerPlaces[options].map((item) => {
          return (
            <button
              style={{
                padding: "0.5rem",
                margin: "auto",
                cursor: "pointer",
                display: "block"
              }}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
