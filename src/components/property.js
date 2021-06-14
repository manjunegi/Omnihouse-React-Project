import React from 'react';
import './property.css';
import PropertyItem from './propertyItem';

export default props => {
    return(
        <div className="main-page">
        <div className="content-container">
         <div className="page-wrap">
        <div className= "content-top"> 15 Search results </div>
        <PropertyItem />
            <h1>AppDividend</h1>
            <h2>Check out our tutorials the side menubar</h2>
        </div>
        </div>
        </div>
        );
};