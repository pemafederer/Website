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
    const styles = {
        imageList: {
          overflow: 'hidden', // Hide the scrollbar
        },
     
      };
  
    return (
        <div className="Galerie">
            <div className="img-container">
                    <img src="Gränichen.WebP" alt="Galerie" title="Galerie" />
                
            </div>
            <div className="galerie-title">
                <h1> GALERIE</h1>
                </div>
            <div className="galerie-main-container">

                <ImageList sx={{ width: "70%" , height: "auto"}} style={styles.imageList} cols={2} rowHeight={"264"} >
                    {dataGalerie.map((item, index) => (
                        <div key={index} className="galerie-container" style={{ maxHeight: "80vh"}}>
                            {/* <ImageListItem key={item.img}>*/}
                            <RModalImages className="RModalImages"
                                contentLabel={"Example Modal"}
                                small={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                medium={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                large={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                sx={{height: "50vh"}}
                                hideDownloadButton="true"
                                hideRotateButton="true"
                                hideZoomButton="true"
                                imageBackgroundColor="white"
                            />

                            {/*</ImageListItem>*/}

                        </div>
                    ))}

                </ImageList>








            </div>
        </div>
    )
}