import React from 'react';
import './SponsoringBanner.css';

const SponsoringBanner = () => {
    return (
        <div className="sponsor-banner">
            <div className="sponsor-section private-sponsors">
                <h2>Private Sponsors</h2>
                <div className="sponsor-logos">
                    <img src="tibetasia.jpg" alt="Sponsor 1" />
                    <img src="sypboa2.jpg" alt="Sponsor 2" />
                </div>
            </div>
            <div className="sponsor-section team-sponsors">
                <h2>Team Sponsors</h2>
                <div className="sponsor-logos">
                    <img src="specialized.jpg" alt="Sponsor 1" />
                    <img src="swissstop.jpg" alt="Sponsor 2" />
                    <img src="towersports.jpg" alt="Sponsor 1" />
                    <img src="raiffeisen.jpg" alt="Sponsor 2" />
                    <img src="keller&kuhn.jpg" alt="Sponsor 1" />
                    <img src="hustech.jpg" alt="Sponsor 2" />
                </div>
            </div>
        </div>
    );
}

export default SponsoringBanner;
