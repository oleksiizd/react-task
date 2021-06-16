import React from "react";
import Button from "@material-ui/core/Button";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

function JsonButton(props) {
  const { parcedData } = props;

  const eObj = {};
  eObj.root = parcedData;

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

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<InsertDriveFileIcon />}
      onClick={downloadObjectAsJson}
    >
      Create JSON
    </Button>
  );
}

export default JsonButton;
