import React from "react";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";
import useParseTxtFile from "./useParseTxtFile";

function ParseTxtFile() {
  let startParse = useParseTxtFile();

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <input
          className={classes.input}
          id="contained-button-file"
          multiples
          type="file"
          onChange={startParse}
        />
        <label htmlFor="contained-button-file">
          <Button
            onChange={(e) => startParse(e)}
            variant="contained"
            color="primary"
            component="span"
            size="large"
            startIcon={<InsertDriveFileIcon />}
          >
            Upload
          </Button>
        </label>
      </div>
    </>
  );
}

export default ParseTxtFile;
