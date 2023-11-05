import React from 'react';
import { Player } from 'video-react';

export default function Video(){
  return (
    <Player
      playsInline
      poster="uster.jpg"
      src="public/IMG_6161.MOV"
    />
  );
};