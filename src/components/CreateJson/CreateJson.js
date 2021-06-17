import React from "react";
import Button from "@material-ui/core/Button";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import useCreateJson from "./useCreateJson";

function JsonButton(props) {
  const { parsedData } = props;
  const jsonHook = useCreateJson(parsedData);

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<InsertDriveFileIcon />}
      onClick={jsonHook}
    >
      Create JSON
    </Button>
  );
}

export default JsonButton;
