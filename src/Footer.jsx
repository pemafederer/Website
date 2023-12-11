import React from "react"
import Avatar from '@mui/material/Avatar';

export default function Footer() {
    return (
        <div className="footer-container" >
            <footer>
               
                <div className="footer-title"> Pema Federer  Mountainbiker</div>
                <div className="footer-content">
                <div className="footer-email">federerpema@icloud.com</div>
                <div className="footer-email">federerpema@icloud.com</div>
                <div className="footer-creater">Made by: Pema Federer</div>
                <div className="footer-telefon">077 521 98 65</div>
                </div>
                <div className="icon-container">
                    <div className="icon-img">
                    <a href="https://www.strava.com/athletes/53867076" target="_blank"><img src="http://localhost:5173/strava-icon.png" alt="Strava icon" ></img></a>
                    <a href="https://www.instagram.com/pema_federer/" target="_blank"><img src="http://localhost:5173/instagram-icon.png" alt="Instagram icon" ></img></a>
                    
                    </div>
                </div>
            </footer>
        </div>

    )
}