import React, { useState } from "react";
import TableWeather from "./components/TableWeather/TableWeather";
import CreateJson from "./components/CreateJson/CreateJson";
import ReadTxtFile from "./components/ParseTxtFile/ParseTxtFile";

function App() {
  const [parsedData, setData] = useState([]);

  return (
    <>
      <ReadTxtFile setData={setData} />
      <CreateJson parsedData={parsedData} />
      <TableWeather parsedData={parsedData} />
    </>
  );
}

export default App;
