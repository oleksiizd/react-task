export interface ParsedDataState {
  parsedData: ParsedDataObj[];
  headerData: string[];
}

export interface ParsedDataObj {
  yyyy: string;
  mm: string;
  tmin: string;
  tmax: string;
  af: string;
  rain: string;
  sun: string;
  prov?: string;
}
