import ImageList from '@mui/material/ImageList';
import React, { useEffect } from "react";
import { RModalImages } from "react-modal-images";
import dataGalerie from "./data-galerie";


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
      useEffect(() => {
        window.scrollTo(0, 0); // Scrollen Sie nach oben, wenn die Komponente eingetreten ist
      }), []
  
  
    return (
        <div className="Galerie">
            <div className="img-container">
                    <img src="Chur2024_Techzone.jpg" alt="Galerie" title="Galerie" loading='lazy'/>
                
            </div>
            <div className="galerie-title">
                <h1> GALERIE</h1>
                </div>
            <div className="galerie-main-container">

                <ImageList sx={{ width: "80%" , height: "auto"}} style={styles.imageList} cols={2} rowHeight={"264"} >
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