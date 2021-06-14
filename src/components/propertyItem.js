import React from 'react';
import './property.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
import image1 from './images/property1.png';

const fadeImages = [
  image1,image1,image1
];

export default props => {
    return(

        <div className="property-item">
          <div className="slide-container">
            <Fade>
              <div className="each-fade">
                <img src={fadeImages[0]} />
              </div>
              <div className="each-fade">
                <img src={fadeImages[1]} />
              </div>
              <div className="each-fade">
                <img src={fadeImages[2]} />
              </div>
            </Fade>
          </div>
          <div className="property-description">
          <h4> 3 Bedroom flat in Hackney Bridge</h4>
          <p> £1,420 pcm </p>
          <div class="row">
  <div class="column">
  3,1,2</div>
  <div class="column"> tube station</div>
  <div class="column">Furnished</div>
  <div class="column"> Move-in from 20/04/21</div>
</div>
<hr/>
          </div>
        </div>

        );
};