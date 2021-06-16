import "./App.css";
import React, { useState } from "react";
import TableWeather from "./components/TableWeather";
import JsonButton from "./components/JsonButton";
import ReadTxtFile from "./components/ReadTxtFile";
import { ArraySchema } from "./validation/ArrayValidation";

function App() {
  const [parcedData, setData] = useState([]);

  async function checkValidation() {

    let tempObj = {
      data: parcedData
    }

    try{
    const arrIsValid = await ArraySchema.validate(tempObj);
    const arrIsValid2 = await ArraySchema.isValid(tempObj);
    console.log(arrIsValid);
    console.log(arrIsValid2);
    }
    catch(err){
      console.log(err)
    }
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
