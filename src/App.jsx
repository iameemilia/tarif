import React, { useState } from "react";
import { data } from "./data";
import Tariff from "./components/Tariff/Tariff";

const App = () => {
  return (
    <div className="App">
      {data.map((item, index) => (
        <Tariff key={index} data={item} />
      ))}
    </div>
  );
};

export default App;
