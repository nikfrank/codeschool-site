import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
  //import createHistory from 'history/createBrowserHistory';
  //import createHashHistory from 'history/createHashHistory';

//const history = createHistory();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './pure/Layout';


class Blah extends React.Component {
  render(){
    return <div>blahhhh</div>;
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={App}/>
          <Route path='/course/:course' exact component={Blah}/>
        </Switch>
      </Layout>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
