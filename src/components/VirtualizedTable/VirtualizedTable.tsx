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

export default function MuiVirtualizedTable(props: IMuiVirtualizedTableProps) {
  const classes = useStyles();
  const getRowClassName = ({ index }: IRow) => {
    const { onRowClick } = props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  const cellRenderer: TableCellRenderer = ({ cellData, columnIndex }) => {
    const { columns, onRowClick } = props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: 48 }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
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
    const { columns } = props;

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
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  const { columns, ...tableProps } = props;
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
