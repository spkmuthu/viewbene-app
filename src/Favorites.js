import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(beneName, beneBankName, beneAcctNo, beneRef) {
  return { beneName, beneBankName, beneAcctNo, beneRef};
}

const rows = [
  createData('beneName1','beneBankName1', 11111100000001,'beneRef1'),
  createData('beneName3','beneBankName3', 11111100000003,'beneRef3'),
  createData('beneName5','beneBankName5', 11111100000005,'beneRef5'),
  createData('beneName7','beneBankName7', 11111100000007,'beneRef7'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export function Favorites() {
  const classes = useStyles();

  return (
   <div>
    <div align="center">
      <p></p>
      <h2 className="App App-link">Favourite Beneficiaries</h2>
      <p></p>      
    </div> 
   <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Beneficiary Name</StyledTableCell>
            <StyledTableCell align="right">Beneficiary Bank Name</StyledTableCell>
            <StyledTableCell align="right">Account Number</StyledTableCell>
            <StyledTableCell align="right">Reference Note</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="right">{row.beneName}</StyledTableCell>              
              <StyledTableCell align="right">{row.beneBankName}</StyledTableCell>
              <StyledTableCell align="right">{row.beneAcctNo}</StyledTableCell>
              <StyledTableCell align="right">{row.beneRef}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
