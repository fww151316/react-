import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css'
import Login from './conter/Login';
import Jdbj from './buju/Buju';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/jdbj' component={Jdbj} />
      </Router>
    </div>
  );
}

export default App;
