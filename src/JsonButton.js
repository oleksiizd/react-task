import React from "react";
import Button from "@material-ui/core/Button";

//double-download bug

export default function JsonButton(props) {
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

  return (
    <>
      <div>JsonButton div</div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={downloadObjectAsJson(eObj, "Task")}
      >
        Create JSON
      </Button>
    </>
  );
}
