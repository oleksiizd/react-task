import React from "react";
import Button from "@material-ui/core/Button";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

//double-download bug

function JsonButton(props) {
  const { rows } = props;

  const eObj = {};
  eObj.root = rows;

  function downloadObjectAsJson(exportObj, exportName) {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj, null, 2));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  function jsonClicked() {
    console.log("json clicked");
  }

  return (
    <>
      <div>JsonButton div</div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<InsertDriveFileIcon />}
        onClick={jsonClicked}
      >
        Create JSON
      </Button>
    </>
  );
}

export default JsonButton;
