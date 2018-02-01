import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';


import Flex_grid_column_wrap_centre from './Flex_grid_column_wrap_centre';

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 100,
    width: '100%'
  },

  paperCentre:{
    height: '100%',
    flex: 3,
    width: '60%',
    margin: 100,
    textAlign: 'left',
    padding: 100
  },

};

class Flex_grid_row_wrap extends Component {
  render() {
    return (
      <div>
        <div style={styles.div}>
          EVENTS:
          <Paper zDepth={3} style={styles.paperCentre}>
            <Flex_grid_column_wrap_centre />
          </Paper>

        </div>
      </div>
    )
  }
};

export default Flex_grid_row_wrap;
