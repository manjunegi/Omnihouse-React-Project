import React from 'react';
import './property.css';
import PropertyList from './propertylistview';
import PropertyItem from './propertyItem';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default props => {
    return(
        <Router>
        <div className="main-page">
        <div className="content-container">
         <div className="page-wrap">
          <Switch>
              <Route exact path='/' component={PropertyList} />
              <Route path='/property' component={PropertyItem} />
          </Switch>
        </div>
        </div>
        </div>
        </Router>
        );
};