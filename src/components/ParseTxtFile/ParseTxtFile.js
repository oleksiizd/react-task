import React from "react";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";
import useParseTxtFile from "./useParseTxtFile";

function ParseTxtFile({ setData }) {
  let func1 = useParseTxtFile({ setData });

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <input
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={func1}
        />
        <label htmlFor="contained-button-file">
          <Button
            onChange={(e) => func1(e)}
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
