import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useSelector } from "react-redux";
import { getStoredData } from "../../redux/selectors/getStoredData";
import { parsedDataObj } from "./TableWeather.types";

function SimpleTable() {
  const parsedData: parsedDataObj = useSelector(getStoredData);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
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
