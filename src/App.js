import "./App.css";
import React, { useState } from "react";
import TableWeather from "./components/TableWeather";
import JsonButton from "./components/JsonButton";
import ReadTxtFile from "./components/ReadTxtFile";

function App() {
  const [parcedData, setData] = useState([]);

  return (
    <>
      <ReadTxtFile setData={setData} />
      <JsonButton parcedData={parcedData} />
      <TableWeather parcedData={parcedData} />
    </>
  );
}

export default App;
