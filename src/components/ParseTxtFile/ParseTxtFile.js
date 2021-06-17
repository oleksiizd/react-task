import React from "react";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Button from "@material-ui/core/Button";
import { ArraySchema } from "./../../validation/ArrayValidation";
import useStyles from "./useStyles";

function ParseTxtFile({ setData }) {
  const classes = useStyles();

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      let dataArr = text.split("\n");
      let parsedData = [];
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

      dataArr.forEach(function (row) {
        objKeys.forEach(function (key, value) {
          tempObj[key] = row[value];
        });
        parsedData.push(tempObj);
        tempObj = {};
      });

      async function checkValidation() {
        try {
          const arrIsValid = await ArraySchema.validate(parsedData);
          const arrIsValid2 = await ArraySchema.isValid(parsedData);
          console.log(arrIsValid);
          console.log(arrIsValid2);
        } catch (err) {
          console.log(err);
        }
      }

      checkValidation();
      setData(parsedData);
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
          onChange={showFile}
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

export default ParseTxtFile;
