import { ArraySchema } from "../../validation/ArrayValidation";

function useParseTxtFile({ setData }) {
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

  return showFile;
}

export default useParseTxtFile;
