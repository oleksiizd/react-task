import './App.css';
import React, {useState} from 'react'
import TableWeather from './TableWeather'
import JsonButton from './JsonButton'
import ReadTxtFile from './ReadTxtFile'

function App() {
  const [rows, setMas] = useState([])

  return (
    <>
      <ReadTxtFile setMas1={(arr)=>setMas(arr)}/>
      <JsonButton rows={rows} />
      <TableWeather rows={rows} />
          
    </>
  );
}

export default App;