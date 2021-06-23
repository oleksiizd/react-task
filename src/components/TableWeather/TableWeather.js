import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./useStyles";

import { useSelector } from "react-redux";

function SimpleTable() {
  const classes = useStyles;
  const parsedData = useSelector((state) => state.storedData);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {parsedData.map((row, index) => (
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

SimpleTable.propTypes = {
  parsedData: PropTypes.array,
};

export default SimpleTable;
