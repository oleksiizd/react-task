export interface IParsedDataState {
  parsedData: IParsedDataObj[];
  headerData: string[];
}

export interface IParsedDataObj {
  yyyy: string;
  mm: string;
  tmin: string;
  tmax: string;
  af: string;
  rain: string;
  sun: string;
  prov?: string;
}
