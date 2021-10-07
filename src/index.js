import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Globalcss from './Globalcss';
import {HashRouter as Rotuer} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Rotuer>
      <Globalcss/>
        <App />
    </Rotuer>
  </React.StrictMode>,
  document.getElementById('root')
);

