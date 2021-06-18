import React from "react";
import Button from "@material-ui/core/Button";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import useCreateJson from "./useCreateJson";

function CreateJson(props) {
  const { parsedData } = props;

  let clickUseCreateJson = useCreateJson({ parsedData });

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<InsertDriveFileIcon />}
      onClick={clickUseCreateJson}
    >
      Create JSON
    </Button>
  );
}

export default CreateJson;
