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

//import jsSyntax from 'react-syntax-highlighter/dist/languages/javascript';
import bashSyntax from 'react-syntax-highlighter/dist/languages/bash';
import tsSyntax from 'react-syntax-highlighter/dist/languages/typescript';
import scssSyntax from 'react-syntax-highlighter/dist/languages/scss';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from './pure/Layout';

import Home from './Home';
import Curriculum from './Curriculum';
import Course from './Course';


injectTapEventPlugin();

// boot light dist version of highlighter
//registerLanguage('js', jsSyntax);
registerLanguage('js', tsSyntax);
registerLanguage('css', scssSyntax);
registerLanguage('bash', bashSyntax);


ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/curriculum/:course' exact component={Curriculum}/>
          <Route path='/course/:course' exact component={Course}/>
        </Switch>
      </Layout>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
