import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import dataCalender from './data-calender';
import ImageSlider from './ImageSlider';

export default function Calender() {
  
  return (
    <div className='contact-mui'><Timeline position="absolute">
              {dataCalender.map((item) => (
                  <div>
                      <TimelineItem position='alternate'>
                          <TimelineOppositeContent color="white">
                              {item.date}
                          </TimelineOppositeContent>
                          <TimelineSeparator>
                              <TimelineDot color={item.state} />
                              <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>{item.race}</TimelineContent>
                      </TimelineItem>
                  </div>
              ))}

          </Timeline></div>
  );
}