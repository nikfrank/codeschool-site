import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Code from 'material-ui/svg-icons/action/code';

export default ({ children })=> (
  <div>
    <AppBar
        title="codeschool"
        iconElementLeft={<IconButton><Code /></IconButton>}
        iconElementRight={<div></div>}
    />
    {children}
  </div>
);
