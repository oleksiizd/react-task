import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import { getParsedData } from "../../redux/selectors/getStoredData";
import MuiVirtualizedTable from "../VirtualizedTable/VirtualizedTable";

export default function TableWeather() {
  const [parsedData, parsedHeader] = useSelector(getParsedData);

  return (
    <Paper style={{ height: 400, width: "100vh" }}>
      <MuiVirtualizedTable
        rowCount={parsedData.length}
        rowGetter={({ index }) => parsedData[index]}
        columns={parsedHeader.map((label) => ({
          width: 150,
          label: label,
          dataKey: label,
        }))}
      />
    </Paper>
  );
}
