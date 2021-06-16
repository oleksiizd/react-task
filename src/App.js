import React, { useState } from "react";
import TableWeather from "./components/TableWeather/TableWeather";
import JsonButton from "./components/CreateJson/CreateJson";
import ReadTxtFile from "./components/ParseTxtFile/ParseTxtFile";

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
