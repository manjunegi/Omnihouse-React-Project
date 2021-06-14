import React from 'react';
import './property.css';
import PropertyItem from './propertyItem';
import PropertyList from './propertylistview';

export default props => {
    return(
        <div className="main-page">
        <div className="content-container">
         <div className="page-wrap">
        <div className= "content-top"> 15 Search results </div>
        <PropertyList />
        <PropertyList />
        <PropertyList />
        {/*<PropertyItem />*/}
        </div>
        </div>
        </div>
        );
};