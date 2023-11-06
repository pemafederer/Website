import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Calender from './Calender';
import ImageSlider from './ImageSlider';


export default function Rennkalender() {

    const slides = [
        { url: "Savognin.jpg", title: "Gränichen Junior Series" },
        { url: "Haiming.JPG", title: "Gränichen Junior Series" },
    ]

    return (
        <div className='Rennkalender'>
            <div className="img-container">
                <img src="gstaad.jpg" />
            </div>
            <div className="RennkalenderH1">
            <h1> Rennkalender</h1>
            </div>
        
           
            <Calender />

        </div>

    );
}