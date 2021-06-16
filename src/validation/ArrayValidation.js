import { object, string, array, number } from "yup";

export const ArraySchema = object().shape({
  data: array().of(
    object().shape({
      yyyy: string().required(),
      mm: string().required(),
      tmin: string().required(),
      tmax: string().required(),
      af: string().required(),
      rain: string().required(),
      sun: string().required(),
      prov: string(),
      id: number().required()
    })
  ),
});
