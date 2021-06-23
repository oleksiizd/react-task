const DATA_ADD = "DATA_ADD";

const addData = (argumentData) => {
  return {
    type: DATA_ADD,
    payload: argumentData,
  };
};

export default addData;
