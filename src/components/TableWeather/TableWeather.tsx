import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Table, Column, AutoSizer } from "react-virtualized";

import { useSelector } from "react-redux";
import { ParsedDataObj } from "../../redux/parsedDataSlice/types";
import { getParsedData } from "../../redux/selectors/getStoredData";
import "react-virtualized/styles.css";

function SimpleTable() {
  const [parsedData, parsedHeader] = useSelector(getParsedData);
  return (
    <>
      <div style={{ height: 400 }}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              width={width}
              height={height}
              headerHeight={60}
              rowHeight={60}
              rowCount={parsedData.length}
              rowGetter={({ index }) => parsedData[index]}
            >
              <Column
                width={100}
                label={parsedHeader[0]}
                dataKey={parsedHeader[0]}
              />
              <Column
                width={100}
                label={parsedHeader[1]}
                dataKey={parsedHeader[1]}
              />
              <Column
                width={100}
                label={parsedHeader[2]}
                dataKey={parsedHeader[2]}
              />
              <Column
                width={100}
                label={parsedHeader[3]}
                dataKey={parsedHeader[3]}
              />
              <Column
                width={100}
                label={parsedHeader[4]}
                dataKey={parsedHeader[4]}
              />
              <Column
                width={100}
                label={parsedHeader[5]}
                dataKey={parsedHeader[5]}
              />
              <Column
                width={100}
                label={parsedHeader[6]}
                dataKey={parsedHeader[6]}
              />
              <Column
                width={100}
                label={parsedHeader[7]}
                dataKey={parsedHeader[7]}
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    </>
  );
}

export default SimpleTable;
