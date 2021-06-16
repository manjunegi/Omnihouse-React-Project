import React from 'react';
import './property.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
import image1 from './images/property1.png';
import tube_icon from "./images/tube_icon.svg";
import share_icon from "./images/share_icon.svg";
import close_icon from "./images/close_icon.svg";
import bedroom_icon from "./images/bed_rooms_icon.svg";
import toilet_icon from "./images/toilets_icon.svg";
import livingroom_icon from "./images/living_room.svg";
import {  Link } from 'react-router-dom';

const fadeImages = [
  image1,image1,image1
];

export default props => {
  
    return(

        <div className="property-item">
        <div className= "page-description-top"><Link to={'/'} className="nav-link"><img className="header-icon" src={close_icon} alt = 'icon'/></Link> <img className="header-icon" src={share_icon} alt = 'icon'/></div>
          <br/>
          <div className="slide-container">
            <Fade>
              <div className="each-fade">
                <img className= "img-responsive" src={fadeImages[0]} alt = 'property-image1'/>
              </div>
              <div className="each-fade">
                <img className= "img-responsive" src={fadeImages[1]} alt = 'property-image2'/>
              </div>
              <div className="each-fade">
                <img className= "img-responsive" src={fadeImages[2]} alt = 'property-image3'/>
              </div>
            </Fade>
          </div>
          <div className="property-description">
          <h2> 3 Bedroom flat in Hackney Bridge</h2>
          <p className="price-value"> £1,420 pcm </p>
          <div className="row">
            <div className="column"><img className="img-icon" src={bedroom_icon}/>3 <img className="img-icon" src={livingroom_icon}/>1 <img className="img-icon" src={toilet_icon}/>2</div>
            <div className="column"><img className="img-icon underground-icon" src={tube_icon}/> South Kensington (0.1 mile)</div>
            <div className="centered column" >Furnished</div>
            <div className="column">Move-in from 20/04/21 </div>
          </div>
          <hr className="diveder" />
          <div className="map-container">
            {/*<GoogleMapReact
                      bootstrapURLKeys={{key: "AIzaSyA-Hm2KgQPKWMyaXejBXKmhubA91elB3R8"}}
                      defaultCenter={{
                  lat: 59.95,
                  lng: 30.33
                }}
                      defaultZoom={11}
                    />*/}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1400.359457052027!2d-0.07088216757985316!3d51.55505994878471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cf52e2fdbb1%3A0xfd39b1daf330b2c!2s83%20Farleigh%20Rd%2C%20London%20N16%207TD!5e0!3m2!1sen!2suk!4v1623649587343!5m2!1sen!2suk" width="100%" height="175"  allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div className="description-paragraph">
          <p>Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June. Early viewings are highly recommended.</p>
          <p>This modern apartment features an open plan kitchen/ living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benefits include, floor to ceiling windows and a 24 hour concierge service.</p>
          <p>The Crawford building itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links.</p>
          </div>
          </div>
        </div>

        );
};