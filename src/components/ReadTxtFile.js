import React from "react";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  
  input: {
    display: "none",
  },
}));

const ReadTxtFile = ({ setMas1 }) => {
  const classes = useStyles();

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;

      let mas1 = text.split("\r\n");
      let mas2 = [];
      let rows = [];
      let obj = {};

      for (let i = 4; i < mas1.length; i++) {
        mas1[i - 4] = mas1[i].split(" ");
        let fmas = mas1[i - 4].filter(function (value, index, arr) {
          return value !== "";
        });
        mas2[i] = fmas;
      }
      let mas3 = mas2.filter(function (el) {
        return el != null;
      });

      let objKeys = mas3[0];
      objKeys.push("prov");
      objKeys.push("id");

      let j = 0;
      
      mas3.forEach(function () {
        let tempValue = mas3[j];
        objKeys.forEach(  function (k, m) {
          obj[k] =  tempValue[m];
        });
        rows.push(obj);
        obj = {};
        j++;
      } );
      
      setMas1(rows);
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
};

export default ReadTxtFile;
