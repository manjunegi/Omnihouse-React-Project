import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./sidebar.css"

export default props => {
  return (
    <Menu isOpen={ true } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
    <div className="sidebar-heading">
      <h3> Find a rental property </h3>
    </div>
      <form>
      <div className="menu-box top" >
        <label>
          <div className="label-heading">
          Search area
          </div>
          <div className="value-container">
            <input className="value-elememt" type="text" name="name" placeholder="eg. Oxford or NW3" />
          </div>
        </label>
      </div>
      <div className="flex-container">
        <div className= "menu-box flex-child" >
          <label> 
            <div className="label-heading">Minimum Beds</div>
            <select className="value-elememt select-element">
              <option selected value="0">No min</option>
              <option  value="1">1</option>
              <option  value="2">2</option>
              <option value="3">3</option>
              <option  value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>  
        <div className="menu-box flex-child" >
          <label> 
          <div className="label-heading">Maximum Beds</div>
            <select className="value-elememt select-element">
              <option selected value="0">No max</option>
              <option  value="1">1</option>
              <option  value="2">2</option>
              <option value="3">3</option>
              <option  value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
      </div>
      <div className= "menu-box">
       <label> 
        <div className="label-heading">Price per</div>
          <select className="value-elememt select-element">
            <option selected value="month">Month</option>
            <option  value="year">Year</option>
          </select>
        </label>
      </div>
      <div className="flex-container">
        <div className= "menu-box flex-child" >
          <label> 
            <div className="label-heading">Minimum price</div>
            <select className="value-elememt select-element">
              <option selected value="0">No min</option>
              <option  value="1">£0-50</option>
              <option  value="2">£50-100</option>
              <option value="3">£100-200</option>
            </select>
          </label>
        </div>  
        <div className="menu-box flex-child" >
          <label> 
          <div className="label-heading">Maximum price</div>
            <select className="value-elememt select-element">
              <option selected value="0">No min</option>
              <option  value="1">£0-50</option>
              <option  value="2">£50-100</option>
              <option value="3">£100-200</option>
            </select>
          </label>
        </div>
      </div>
      <div >
        <input className="submit-button" type="submit" value="FIND PROPERTIES" />
      </div>
</form>
    </Menu>
  );
};