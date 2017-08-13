import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import Hamburger from 'material-ui/svg-icons/navigation/menu';

import Code from 'material-ui/svg-icons/action/code';

import { Link } from 'react-router-dom';

const DRAWER_WIDTH = 160;

const HomeLink = (
  <Link to="/">
    <IconButton><Code /></IconButton>
  </Link>
);


export default class Layout extends Component {

  state = {
    open: false,
    width: window.innerWidth,
    courses: false,
    curricula: false,
  }
  
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({ width: window.innerWidth })
    } )
  }

  toggleDrawer = ()=> {
    this.setState({ open: !this.state.open });
  }
  
  toggleCourses = ()=> {
    this.setState({ courses: !this.state.courses });
  }
  
  toggleCurricula = ()=> {
    this.setState({ curricula: !this.state.curricula });
  }

  
  
  render(){
    return (
      <div style={{ marginLeft: (this.state.width > 800 ? DRAWER_WIDTH : 0) }}>
        <AppBar
          style={{ position: 'fixed', top: 0 }}
          title="{ codeSchool } IL"
          iconElementLeft={HomeLink}
          iconElementRight={<IconButton><Hamburger onTouchTap={this.toggleDrawer}/></IconButton>} />

        <Drawer open={this.state.open || (this.state.width > 800)} width={DRAWER_WIDTH}>
          <MenuItem>Home</MenuItem>

          <Divider/>
          <MenuItem onTouchTap={this.toggleCourses}>
            Courses
            <IconButton style={{float:'right'}}><Hamburger/></IconButton>
          </MenuItem>
          {
            !this.state.courses ? null : (
              <div>
                <MenuItem style={{ paddingLeft: 9 }}>Course A</MenuItem>
                <MenuItem style={{ paddingLeft: 9 }}>Course B</MenuItem>
              </div>
            )
          }

          <Divider/>
          <MenuItem onTouchTap={this.toggleCurricula}>
            Curricula
            <IconButton style={{float:'right'}}><Hamburger /></IconButton>
          </MenuItem>
          {
            !this.state.curricula ? null : (
              <div>
                <MenuItem style={{ paddingLeft: 9 }}>Curriculum A</MenuItem>
                <MenuItem style={{ paddingLeft: 9 }}>Curriculum B</MenuItem>
              </div>
            )
          }
        </Drawer>
        
        { this.props.children }
      </div>
    );
  }
};
