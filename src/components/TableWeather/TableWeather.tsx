import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useSelector } from "react-redux";
import { ParsedDataObj } from "../../redux/parsedDataSlice/types";
import { getParsedData } from "../../redux/selectors/getStoredData";

function SimpleTable() {
  const [parsedData, parsedHeader] = useSelector(getParsedData);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {parsedHeader.map((row: string, index: React.Key) => (
              <TableCell size="small" align="center" key={index}>
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {parsedData.map((row: ParsedDataObj, index: React.Key) => (
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
