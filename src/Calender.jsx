import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dataCalender from './data-calender';
import ImageSlider from './ImageSlider';

export default function Calender() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, date, startTime, category, status) {
    return { name, date, startTime, category, status };
  }
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Rennkalender 2024</StyledTableCell>
          <StyledTableCell align="left">Datum</StyledTableCell>
          <StyledTableCell align="left">Startzeit</StyledTableCell>
          <StyledTableCell align="left">Kategorie</StyledTableCell>
          <StyledTableCell align="left">Status</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataCalender.map((row) => (
          <StyledTableRow key={row.race}>
            <StyledTableCell component="th" scope="row">
              {row.race}
            </StyledTableCell>
            <StyledTableCell align="left">{row.date}</StyledTableCell>
            <StyledTableCell align="left">{row.startTime}</StyledTableCell>
            <StyledTableCell align="left">{row.category}</StyledTableCell>
            <StyledTableCell align="left">{row.state}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}