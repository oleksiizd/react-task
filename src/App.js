import React, { useState } from "react";
import TableWeather from "./components/TableWeather/TableWeather";
import JsonButton from "./components/CreateJson/CreateJson";
import ReadTxtFile from "./components/ParseTxtFile/ParseTxtFile";

function App() {
  const [parsedData, setData] = useState([]);

  return (
    <>
      <ReadTxtFile setData={setData} />
      <JsonButton parsedData={parsedData} />
      <TableWeather parsedData={parsedData} />
    </>
  );
}

export default App;
