import React from "react"
import Avatar from '@mui/material/Avatar';

export default function Footer() {
    return (
        <div className="footer-container" >
            <footer>
               
                <div className="footer-title"> Pema Federer | Mountainbiker</div>
                <div className="footer-content">
                <div className="footer-email">federerpema@icloud.com</div>
                <div className="footer-email">8716 Schmerikon</div>
                <div className="footer-creater">Hirzlistrasse 15</div>
                <div className="footer-telefon">077 521 98 65</div>
                </div>
                <div className="icon-container">
                    <div className="icon-img">
                    <a href="https://www.strava.com/athletes/53867076" target="_blank"><img src="strava-icon.jpg" alt="Strava icon" ></img></a>
                    <a href="https://www.instagram.com/pema_federer/" target="_blank"><img src="instagram-icon.jpg" alt="Instagram icon" ></img></a>
                    
                    </div>
                </div>
            </footer>
        </div>

    )
}