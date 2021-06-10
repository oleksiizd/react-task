import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '75%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    
  },
  table: {
    minWidth: 900,
  },
});

function SimpleTable(props) {
  const { classes, rows } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="center">yyyy</TableCell>
            <TableCell align="center">mm</TableCell>
            <TableCell align="center">tmax</TableCell>
            <TableCell align="center">tmin</TableCell>
            <TableCell align="center">af</TableCell>
            <TableCell align="center">rain</TableCell>
            <TableCell align="center">sun</TableCell>
            <TableCell align="center">Provisional</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
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
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array
};

export default withStyles(styles)(SimpleTable);