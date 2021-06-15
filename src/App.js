import "./App.css";
import React, { useState } from "react";
import TableWeather from "./components/TableWeather";
import JsonButton from "./components/JsonButton";
import ReadTxtFile from "./components/ReadTxtFile";
import { InputSchema } from "./validation/InputValidation"

function App() {
  const [parcedData, setData] = useState([]);

  async function checkValidation(event) {
    //event.preventDefault();
    let inputDataValidation = {
      data: JSON.stringify(parcedData[0])
    };
    const isValid = await InputSchema.isValid(inputDataValidation);
    console.log(inputDataValidation);
    console.log(isValid);
  }


  return (
    <>
      <button id="validation-button" onClick={checkValidation}>validation button</button>
      <ReadTxtFile setData={setData} />
      <JsonButton parcedData={parcedData} />
      <TableWeather parcedData={parcedData} />
    </>
  );
}

export default App;
