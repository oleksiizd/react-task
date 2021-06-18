import { ArraySchema } from "../../validation/ArrayValidation";

function useParseTxtFile({ setData }) {
  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      let dataArr = text.split("\n");

      dataArr = dataArr.slice(5);

      let b = dataArr.map(function (x) {
        return x.split(" ");
      });
      let c = b.map(function (z) {
        return z.filter(function (value) {
          return value !== "";
        });
      });
      dataArr = c;

      dataArr.forEach(function () {
        dataArr = dataArr.filter(function (el) {
          return el != null;
        });
      });

      let objKeys = dataArr[0];
      objKeys.push("prov");
      objKeys.push("id");

      let parsedData = [];
      let tempObj = {};
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
