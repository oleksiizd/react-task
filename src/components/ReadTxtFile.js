import React from "react";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

function ReadTxtFile({ setData }) {
  const classes = useStyles();

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      let dataArr = text.split("\n");
      let inputData = text;
      let parcedData = [];
      let tempObj = {};

      dataArr = dataArr.slice(5);
      for (let i = 0; i < dataArr.length; i++) {
        dataArr[i] = dataArr[i].split(" ");
        let tempArr = dataArr[i].filter(function (value, index, arr) {
          return value !== "";
        });
        dataArr[i] = tempArr;
      }

      dataArr.forEach(function () {
        dataArr = dataArr.filter(function (el) {
          return el != null;
        });
      });
      
      let objKeys = dataArr[0];
      objKeys.push("prov");
      objKeys.push("id");

      let j = 0;
      dataArr.forEach(function () {
        let tempValue = dataArr[j];
        objKeys.forEach(function (k, m) {
          tempObj[k] = tempValue[m];
        });
        parcedData.push(tempObj);
        tempObj = {};
        j++;
      });

      setData(parcedData, inputData);
    };
    reader.readAsText(e.target.files[0]);
  };
  return (
    <>
      <div className={classes.root}>
        <input
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => showFile(e)}
        />
        <label htmlFor="contained-button-file">
          <Button
            onChange={(e) => showFile(e)}
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

export default ReadTxtFile;
