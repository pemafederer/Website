import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dataCalender from './data-calender';
import ImageSlider from './ImageSlider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


export default function Rennkalender() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrollen Sie nach oben, wenn die Komponente eingetreten ist
  }), []


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: '1rem',
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

    /*const slides = [
        { url: "Savognin.jpg", title: "Gränichen Junior Series" },
        { url: "Haiming.JPG", title: "Gränichen Junior Series" },
    ]*/

    return (
        <div className='Rennkalender'>
            <div className="img-container">
                <img src="Egg_lastround.JPG" />
            </div>

            <div className="page-title">
            <h1> RENNKALENDER</h1>
            </div>
        
    <TableContainer component={Paper} className='rennkalender-main-container' sx={{ width: '90%' , margin: 'auto'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table"  stickyHeader className='rennkalender-container'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Rennkalender 2024 (provisorisch)</StyledTableCell>
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

        </div>

    );
}