import { useSelector } from "react-redux";
import { RootState } from "../../redux/redux-toolkit/configureStore";
import { getStoredData } from "../../redux/selectors/getStoredData";
import { parsedDataObj } from "../../redux/redux-toolkit/parsedDataSlice/parsedDataSlice.types";

function useCreateJson() {
  const parsedData: parsedDataObj[] = useSelector(
    (state: RootState) => state.getParsedData.parsedData
  );
  function downloadObjectAsJson() {
    let exportObj = { root: parsedData };
    let exportName = "Task";
    let dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj, null, 2));
    let downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  return downloadObjectAsJson;
}

export default useCreateJson;
