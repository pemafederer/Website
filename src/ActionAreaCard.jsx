import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import dataRennberichte from './data-rennberichte';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  return (
    <div className="rennberichte-main-container">


    {dataRennberichte.map(item => (
        <div className='rennberichte-container'>
         <Link to={`/rennbericht/${item.id}`}>
        <Card key={item.id} sx={{maxWidth: 400}} className='rennberichte-card'>
          <CardMedia className='rennberichte-img'
            component="img"
            height="auto"
            image={item.img}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='rennberichte-subtitle' fontSize={17}>
             {item.subtitle}
            </Typography>
          </CardContent>
        </Card>
        </Link>
       </div>
    ))}
    
    
      </div>
        );
    }