import { WithStyles } from "@material-ui/core";
import { IParsedDataObj } from "../../redux/parsedDataSlice/types";
import styles from "./TableWeather";

export interface IColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
}

export interface IRow {
  index: number;
}

export interface IMuiVirtualizedTableProps {
  columns: IColumnData[];
  headerHeight?: number;
  onRowClick?: () => void;
  rowCount: number;
  rowGetter: (row: IRow) => IParsedDataObj;
  rowHeight?: number;
}
