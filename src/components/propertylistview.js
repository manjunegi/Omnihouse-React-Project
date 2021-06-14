import React from 'react';
import './property.css';
import image1 from './images/property1.png';
import tube_icon from "./images/tube_icon.svg";
import bedroom_icon from "./images/bed_rooms_icon.svg";
import toilet_icon from "./images/toilets_icon.svg";
import livingroom_icon from "./images/living_room.svg";
import mail_icon from "./images/mail_icon.svg";

export default props => {
    return(
        <div>
            <div className="flex-container">
                <div className= "flex-child" ><img className="img-responsive" src={image1} /></div>
                <div className= "flex-child" > 
                    <div className="property-name-list-view">3 Bedroom flat in Hackney Bridge</div>
                    <div className="property-price-list-view"> £1,420 pcm </div>
                    <div className="vertical-column"><img className="img-icon" src={bedroom_icon}/>3 <img className="img-icon" src={livingroom_icon}/>1 <img className="img-icon" src={toilet_icon}/>2</div>
                    <div className="vertical-column"><img className="img-icon underground-icon" src={tube_icon}/> South Kensington (0.1 mile)</div>
                    <div className="vertical-column">Furnished</div>
                    <div className="vertical-column">Move-in from 20/04/21 </div>
                    <div className="mail-icon"><img className="img-icon" src={mail_icon}/> </div>
                </div>
            </div>
        
        </div>
        );
};