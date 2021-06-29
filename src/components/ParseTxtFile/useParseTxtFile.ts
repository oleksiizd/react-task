import { ArraySchema } from "../../validation/ArrayValidation";
import { useDispatch } from "react-redux";
import addData from "../../redux/actions/dataAddAction";
import { ChangeEvent } from "react";

function useParseTxtFile() {
  const dispatch = useDispatch();

  const showFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string | undefined;
      if (!text) {
        return [];
      }
      const splittedData = text.split("\n").slice(5);

      const filteredData: string[][] = splittedData.map(function (x) {
        return x
          .split(" ")
          .filter(function (value: string) {
            return value !== "";
          })
          .filter(function (el: string) {
            return el != null;
          });
      });
      const [header, ...data] = filteredData;
      const objKeys: string[] = [...header, "prov"];
      const parsedData: {}[] = data.map((row) => {
        return objKeys.reduce((acc, item, i) => {
          return { ...acc, [item]: row[i] };
        }, {});
      });

      async function checkValidation() {
        try {
          const arrValidate = await ArraySchema.validate(parsedData);
          const arrIsValid = await ArraySchema.isValid(parsedData);
          console.log(arrValidate);
          console.log(arrIsValid);
          if (arrIsValid === true) {
            dispatch(addData(parsedData));
          }
        } catch (err) {
          console.log(err);
        }
      }
      checkValidation();
    };
    console.log(e.target.files);
    if (e.target.files?.length) {
      reader.readAsText(e.target.files[0]);
    }
  };

  return showFile;
}

export default useParseTxtFile;
