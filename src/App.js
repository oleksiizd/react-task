import React, { useState } from "react";
import TableWeather from "./components/TableWeather/TableWeather";
import CreateJson from "./components/CreateJson/CreateJson";
import ParseTxtFile from "./components/ParseTxtFile/ParseTxtFile";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function App() {
  const [parsedData, setData] = useState([]);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <ParseTxtFile setData={setData} />
      <CreateJson parsedData={parsedData} />
      <TableWeather parsedData={parsedData} />
    </>
  );
}

export default App;
