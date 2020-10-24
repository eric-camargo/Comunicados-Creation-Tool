import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ComunicadoBuilder from './containers/ComunicadoBuilder';


function App() {
  return (
      <Switch>
        <Route path='/' component={ComunicadoBuilder} />
      </Switch>
  );
}

export default App;
