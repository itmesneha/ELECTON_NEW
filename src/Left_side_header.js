import React, { Component } from 'react';
import './App.css';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 500,
  padding: 10
};


class Left_side_header extends Component {
  render() {
    return (
      <div className="Left_side_header">
        <Tabs>
     <Tab
       icon={<FontIcon className="material-icons" style={iconStyles}>check_circle</FontIcon>}
       label="Vote!"
     />
     <Tab
       icon={<FontIcon className="material-icons" style={iconStyles}>face</FontIcon>}
       label="Nominate!"
     />
     <Tab
       icon={<FontIcon className="material-icons" style={iconStyles}>grade</FontIcon>}
       label="Results!"
     />
   </Tabs>
   <FontIcon className="material-icons" style={iconStyles}></FontIcon>
   </div>
    );
  }
}

export default Left_side_header;
