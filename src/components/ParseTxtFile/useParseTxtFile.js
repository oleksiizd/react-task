import { ArraySchema } from "../../validation/ArrayValidation";

import { useDispatch } from "react-redux";
import addData from "../redux/actions/dataAddAction";

function useParseTxtFile() {
  const dispatch = useDispatch();

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      let splittedData = text.split("\n").slice(5);

      let filteredData = splittedData.map(function (x) {
        return x
          .split(" ")
          .filter(function (value) {
            return value !== "";
          })
          .filter(function (el) {
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
      dispatch(addData(parsedData));

      checkValidation();
    };
    reader.readAsText(e.target.files[0]);
  };

  return showFile;
}

export default useParseTxtFile;
