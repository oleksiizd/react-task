import TableWeather from "./components/TableWeather/TableWeather";
import CreateJson from "./components/CreateJson/CreateJson";
import ParseTxtFile from "./components/ParseTxtFile/ParseTxtFile";

function App() {
  return (
    <>
      <ParseTxtFile />
      <CreateJson />
      <TableWeather />
    </>
  );
}

export default App;
