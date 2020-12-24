import React from 'react';
import classes from './buildControl.module.css';

const buildControl = (props) => (
  <div className={classes.buildControl}>
    <div className={classes.Label}>
      {props.label}
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  </div>
);

export default buildControl;
