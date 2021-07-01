import { ArraySchema } from "../../validation/ArrayValidation";
import { useDispatch } from "react-redux";
import addData from "../../redux/actions/dataAddAction";
import { ChangeEvent } from "react";
import { parsedDataObj } from "../../redux/redux-toolkit/parsedDataSlice/parsedDataSlice.types";
import {
  dataAdd,
  headerAdd,
} from "../../redux/redux-toolkit/parsedDataSlice/parsedDataSlice";

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
        return x.split(" ").filter(function (value: string) {
          return value !== "" && value != null;
        });
      });

      const [header, ...data] = filteredData;

      const objKeys: string[] = [...header, "prov"];

      const parsedData: parsedDataObj[] = data.map((row) => {
        return objKeys.reduce((acc, item, i) => {
          return { ...acc, [item]: row[i] };
        }, {});
      }) as parsedDataObj[];

      async function checkValidation() {
        try {
          ArraySchema.validate(parsedData);
          const arrIsValid = await ArraySchema.isValid(parsedData);
          if (arrIsValid === true) {
            dispatch(headerAdd(objKeys));
            dispatch(dataAdd(parsedData));
          }
        } catch (err) {
          console.log(err);
        }
      }
      checkValidation();
    };
    if (e.target.files?.length) {
      reader.readAsText(e.target.files[0]);
    }
  };

  return showFile;
}

export default useParseTxtFile;
