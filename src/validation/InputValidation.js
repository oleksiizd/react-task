import * as yup from "yup";

export const InputSchema = yup.object().shape({
  yyyy: yup.string().required(),
  mm: yup.string().required(),
  tmin: yup.string().required(),
  tmax: yup.string().required(),
  af: yup.string().required(),
  rain: yup.string().required(),
  sun: yup.string().required(),
  prov: yup.string().required(),
  id: yup.number().required()
});