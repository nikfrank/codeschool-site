import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  registerLanguage
} from 'react-syntax-highlighter/dist/light';

import jsSyntax from 'react-syntax-highlighter/dist/languages/javascript';


import Layout from './pure/Layout';

import Home from './Home';
import Curriculum from './Curriculum';


// boot light dist version of highlighter
registerLanguage('javascript', jsSyntax);


ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/course/:course' exact component={Curriculum}/>
        </Switch>
      </Layout>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
