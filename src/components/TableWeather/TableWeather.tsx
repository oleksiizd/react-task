import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useSelector } from "react-redux";
import { getStoredData } from "../../redux/selectors/getStoredData";
import { parsedDataObj } from "../../redux/redux-toolkit/parsedDataSlice/parsedDataSlice.types";
import { RootState } from "../../redux/redux-toolkit/configureStore";

function SimpleTable() {
  const parsedData: parsedDataObj[] = useSelector(
    (state: RootState) => state.getParsedData.parsedData
  );
  const headerData: string[] = useSelector(
    (state: RootState) => state.getParsedData.headerData
  );
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerData.map((row: string) => (
              <TableCell size="small" align="center">
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {parsedData.map((row: parsedDataObj, index: React.Key) => (
            <TableRow key={index}>
              <TableCell align="center">{row.yyyy}</TableCell>
              <TableCell align="center">{row.mm}</TableCell>
              <TableCell align="center">{row.tmax}</TableCell>
              <TableCell align="center">{row.tmin}</TableCell>
              <TableCell align="center">{row.af}</TableCell>
              <TableCell align="center">{row.rain}</TableCell>
              <TableCell align="center">{row.sun}</TableCell>
              <TableCell align="center">{row.prov}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleTable;
