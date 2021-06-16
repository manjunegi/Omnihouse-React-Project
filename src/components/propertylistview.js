import React, {useState} from 'react';
import './property.css';
import image1 from './images/property1.png';
import tube_icon from "./images/tube_icon.svg";
import bedroom_icon from "./images/bed_rooms_icon.svg";
import toilet_icon from "./images/toilets_icon.svg";
import livingroom_icon from "./images/living_room.svg";
import mail_icon from "./images/mail_icon.svg";
import PropertyItem from './propertyItem';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default (props) => {
      var prop1 = {
        "title":"3 Bedroom flat in Hackney Bridge",
        "price": "£1,420 pcm",
        "no_of_beds": "3",
        "no_of_living_no": "1",
        "no_of_toilets": "2",
        "nearest_tube": "South Kensington (0.1 mile)",
        "condition": "Furnished",
        "available_date": "Move-in from 20/04/21"
    }
    sessionStorage.setItem('showPropertyDetails','true');
    var toggle= true;
    function handleClick() {
        console.log("test1");
        console.log(sessionStorage.getItem('showPropertyDetails'));
        if (sessionStorage.getItem('showPropertyDetails') == 'false'){sessionStorage.setItem('showPropertyDetails','true');}else {sessionStorage.setItem('showPropertyDetails','false');};
    }
    const items = []
    var i;
      for (i = 0; i < 16; i++) {
        items.push( <div className="property-list-view">
            <div className="flex-container-2">
                <div  className= "flex-child-1" ><img className="img-responsive" src={image1} /></div>
                <Link to={'/property'} className="nav-link-custom"><div className= "flex-child-2" > 
                    <div className="property-name-list-view">3 Bedroom flat in Hackney Bridge</div>
                    <div className="property-price-list-view"> £1,420 pcm </div>
                    <div className="vertical-column"><img className="img-icon" src={bedroom_icon}/>3 <img className="img-icon" src={livingroom_icon}/>1 <img className="img-icon" src={toilet_icon}/>2</div>
                    <div className="vertical-column"><img className="img-icon underground-icon" src={tube_icon}/> South Kensington (0.1 mile)</div>
                    <div className="vertical-column">Furnished</div>
                    <div className="flex-container"><div className="vertical-column flex-child-2">Move-in from 20/04/21 </div>
                    <div className="mail-icon flex-child"><img className="img-icon mail-box-icon " src={mail_icon}/> </div></div>
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