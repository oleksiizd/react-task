import "./App.css";
import React, { useState } from "react";
import TableWeather from "./components/TableWeather";
import JsonButton from "./components/JsonButton";
import ReadTxtFile from "./components/ReadTxtFile";
import { InputSchema } from "./validation/InputValidation";
import { ArraySchema } from "./validation/ArrayValidation";

function App() {
  const [parcedData, setData] = useState([]);

  console.log(parcedData)
  async function checkValidation() {

    let tempObj = {
      data: parcedData
    }

    let i = 0;
    parcedData.forEach(async function () {
      const isValid = await InputSchema.isValid(parcedData[i]);
      console.log(parcedData[i]);
      console.log(isValid);
      i++;
    });

    const arrIsValid = await ArraySchema.isValid(tempObj);
    console.log(arrIsValid);
    console.log(tempObj)
    
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
