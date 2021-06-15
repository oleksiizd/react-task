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
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj, null, 2));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  return (
    <>
      <div>JsonButton div</div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<InsertDriveFileIcon />}
        onClick={downloadObjectAsJson}
      >
        Create JSON
      </Button>
    </>
  );
}

export default JsonButton;
