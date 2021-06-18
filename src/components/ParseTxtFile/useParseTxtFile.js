import { ArraySchema } from "../../validation/ArrayValidation";

function useParseTxtFile({ setData }) {
  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      let splittedData = text.split("\n");

      let slicedData = splittedData.slice(5);

      let filteredData = slicedData.map(function (x) {
        return x.split(" ").filter(function (value) {
          return value !== "";
        });
      });

      filteredData.forEach(function () {
        filteredData = filteredData.filter(function (el) {
          return el != null;
        });
      });

      const [header, ...data] = filteredData;
      const objKeys = [...header, "prov"];

      const parsedData = data.map((row) => {
        return objKeys.reduce((acc, item, i) => {
          return { ...acc, [item]: row[i] };
        }, {});
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
