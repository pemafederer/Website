import React from "react";

export default function Footer() {
    return (
        <div className="footer-container">
            <footer>
                <div className="footer-row">
                    <div className="footer-left">
                        <div className="footer-title">Pema Federer | Mountainbiker</div>
                        <div className="footer-content">
                            <div className="footer-item">federerpema@icloud.com</div>
                            <div className="footer-item">8716 Schmerikon</div>
                            <div className="footer-item">077 521 98 65</div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="icon-container">
                            <div className="icon-img">
                                <a href="https://www.instagram.com/pema_federer/" target="_blank">
                                    <img src="instagram-icon.jpg" alt="Instagram icon" />
                                </a>
                                <a href="https://www.strava.com/athletes/53867076" target="_blank">
                                    <img src="strava-icon.jpg" alt="Strava icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/pema-federer-0bb7192a5/" target="_blank">
                                    <img src="linkedingLogo.png" alt="Linkedin icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
