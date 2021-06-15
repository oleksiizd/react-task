import * as yup from "yup";

export const InputSchema = yup.object().shape({
  data: yup.string().required()
});