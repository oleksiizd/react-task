import clsx from "clsx";
import TableCell from "@material-ui/core/TableCell";
import {
  AutoSizer,
  Column,
  Table,
  TableCellRenderer,
  TableHeaderProps,
} from "react-virtualized";
import { IRow } from "../TableWeather/types";
import useStyles from "../TableWeather/useStyles";
import { IMuiVirtualizedTableProps } from "../TableWeather/types";

export default function MuiVirtualizedTable({
  columns,
  onRowClick,
  ...tableProps
}: IMuiVirtualizedTableProps) {
  const classes = useStyles();
  const getRowClassName = ({ index }: IRow) => {
    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  const cellRenderer: TableCellRenderer = ({ cellData, columnIndex }) => {
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: 48 }}
        align={
          columnIndex != null && columns[columnIndex].numeric ? "right" : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  const headerRenderer = ({
    label,
    columnIndex,
  }: TableHeaderProps & { columnIndex: number }) => {
    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: 48 }}
        align={columns[columnIndex].numeric ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={48}
          headerHeight={48!}
          className={classes.table}
          {...tableProps}
          rowClassName={getRowClassName}
        >
          {columns.map(({ dataKey, ...other }, index) => (
            <Column
              key={dataKey}
              headerRenderer={(headerProps) =>
                headerRenderer({
                  ...headerProps,
                  columnIndex: index,
                })
              }
              className={classes.flexContainer}
              cellRenderer={cellRenderer}
              dataKey={dataKey}
              {...other}
            />
          ))}
        </Table>
      )}
    </AutoSizer>
  );
}
