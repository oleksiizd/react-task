import "./App.css";
import React, { useState } from "react";
import TableWeather from "./components/TableWeather";
import JsonButton from "./components/JsonButton";
import ReadTxtFile from "./components/ReadTxtFile";

function App() {
  const [rows, setMas] = useState([]);

  return (
    <>
      <ReadTxtFile setMas1={setMas} />
      <JsonButton rows={rows} />
      <TableWeather rows={rows} />
    </>
  );
}

export default App;
