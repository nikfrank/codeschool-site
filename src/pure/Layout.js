import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Code from 'material-ui/svg-icons/action/code';

import { Link } from 'react-router-dom';

const HomeLink = (
  <Link to="/">
    <IconButton><Code style={{color:'white'}} /></IconButton>
  </Link>
);


export default ({ children })=> (
  <div>
    <AppBar
        style={{ position: 'fixed', top: 0 }}
        title="codeschool"
        iconElementLeft={HomeLink}
        iconElementRight={<div></div>}
    />
    {children}
  </div>
);
