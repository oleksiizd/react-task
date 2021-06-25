import { useSelector } from "react-redux";
import { getStoredData } from "../../redux/selectors/getStoredData";

function useCreateJson() {
  const parsedData = useSelector(getStoredData);
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
