function useCreateJson(props) {
  const { parsedData } = props;

  const eObj = {};
  eObj.root = parsedData;

  function downloadObjectAsJson(exportObj, exportName) {
    exportObj = eObj;
    exportName = "Task";
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
