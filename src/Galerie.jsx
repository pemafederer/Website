import React from "react"
import dataGalerie from "./data-galerie"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { RModalImages } from "react-modal-images";
import SlideShow from "./Slideshow";
import ImageSlider from "./ImageSlider";


export default function Galerie() {
    const slides = [
        { url: "Savognin_2.JPG", title: "Gränichen Junior Series" },
        { url: "Crans-Montana.JPG", title: "Gränichen Junior Series" },
        { url: "Savognin.jpg", title: "Gränichen Junior Series" },
        { url: "Haiming.JPG", title: "Gränichen Junior Series" },
    ]
    const figcaption = "Galerie";


    return (
        <div className="Galerie">
            <div className="img-container">
                    <img src="Gränichen.JPG" alt="Galerie" title="Galerie" />
                    <figcaption className="img-container-title">{figcaption}</figcaption>
            
                
            </div>
            <h1>Galerie</h1>
            <div className="galerie-main-container">

                <ImageList sx={{ width: "70%" }} cols={2} rowHeight={600} >
                    {dataGalerie.map((item) => (
                        <div className="galerie-container">

                            {/* <ImageListItem key={item.img}>*/}
                            <RModalImages className="RModalImages"
                                contentLabel={"Example Modal"}
                                small={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                medium={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                large={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />

                            {/*</ImageListItem>*/}

                        </div>
                    ))}

                </ImageList>








            </div>
        </div>
    )
}