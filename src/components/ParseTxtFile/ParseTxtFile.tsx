import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";
import useParseTxtFile from "./useParseTxtFile";

function ParseTxtFile() {
  const startParse = useParseTxtFile();

  const classes = useStyles();

  return (
    <>
      <div>
        <input
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={startParse}
        />
        <label htmlFor="contained-button-file">
          <Button
            onChange={startParse}
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
