import React from "react";
import Button from "@material-ui/core/Button";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import useCreateJson from "./useCreateJson";

function JsonButton(props) {
  const { parsedData } = props;
  useCreateJson(parsedData);

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<InsertDriveFileIcon />}
      onClick={useCreateJson}
    >
      Create JSON
    </Button>
  );
}

export default JsonButton;
