import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import HomeContainer from './Containers/HomeContainer';
import ResultsContainer from './Containers/ResultsContainer';
import DetailsContainer from './Containers/DetailsContainer';


ReactDOM.render(
  <Router history={browserHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={HomeContainer} />
        <Route path='/results' component={ResultsContainer} />
        <Route path='/details' component={DetailsContainer} />
      </Route>
  </Router>,
  document.getElementById('root')
);
