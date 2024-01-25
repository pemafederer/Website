import dataRennberichte from './data-rennberichte';
import React from "react"
import { Carousel } from 'react-responsive-carousel';


export default function ReactCarousel(){
    const { rennId } = useParams();
    const rennbericht = dataRennberichte.find(i => i.id == rennId)
        return (
          
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src={rennbericht.img_container_1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={rennbericht.img_container_2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={rennbericht.img_container_3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        
        )
        }

