export interface parsedDataObj {
  map(
    arg0: (row: parsedDataObj, index: import("react").Key) => JSX.Element
  ): import("react").ReactNode;
  yyyy: string;
  mm: string;
  tmin: string;
  tmax: string;
  af: string;
  rain: string;
  sun: string;
  prov?: string;
}
[];
