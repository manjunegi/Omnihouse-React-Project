import React from 'react';
import './property.css';
import image1 from './images/property1.png';
import tube_icon from "./images/tube_icon.svg";
import bedroom_icon from "./images/bed_rooms_icon.svg";
import toilet_icon from "./images/toilets_icon.svg";
import livingroom_icon from "./images/living_room.svg";
import mail_icon from "./images/mail_icon.svg";
import { Link } from 'react-router-dom';

export default (props) => {
      
    const items = []
    var i;
      for (i = 0; i < 16; i++) {
        items.push( <div className="property-list-view">
            <div className="flex-container-2">
                <div  className= "flex-child-1" ><img className="img-responsive" src={image1} alt = 'property1'/></div>
                <Link to={'/property'} className="nav-link-custom"><div className= "flex-child-2" > 
                    <div className="property-name-list-view">3 Bedroom flat in Hackney Bridge</div>
                    <div className="property-price-list-view"> £1,420 pcm </div>
                    <div className="vertical-column"><img className="img-icon" src={bedroom_icon} alt="bedroom"/>3 <img className="img-icon" src={livingroom_icon} alt="livingroom"/>1 <img className="img-icon" src={toilet_icon} alt="toilets"/>2</div>
                    <div className="vertical-column"><img className="img-icon underground-icon" src={tube_icon} alt='underground'/> South Kensington (0.1 mile)</div>
                    <div className="vertical-column">Furnished</div>
                    <div className="flex-container"><div className="vertical-column flex-child-2">Move-in from 20/04/21 </div>
                    <div className="mail-icon flex-child"><img className="img-icon mail-box-icon " src={mail_icon} alt = 'icon'/> </div></div>
                </div></Link>
            </div>
        </div>)
      }
    return(
       <div>
       <div className= "content-top">15 Search results</div>
       {items}
       </div>
        );
};