const dataAddReducer = (state = [], action) => {
  switch (action.type) {
    case "DATA_ADD":
      return (state = action.payload);
    default:
      return state;
  }
};

export default dataAddReducer;
