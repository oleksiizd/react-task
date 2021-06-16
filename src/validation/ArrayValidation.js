import { object, string, array } from "yup";

export const ArraySchema = array().of(
  object().shape({
    yyyy: string().required(),
    mm: string().required(),
    tmin: string().required(),
    tmax: string().required(),
    af: string().required(),
    rain: string().required(),
    sun: string().required(),
    prov: string(),
  })
);
