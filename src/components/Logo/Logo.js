import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  // We want to size the logo in a responsive way so that it adjusts to different screen sizes.
  // Since we accept props here, we can set inline styles here to override the CSS class settings
  // to basically assign a JavaScript object, where we set 'height' to 'props.height'.
  // And then, since we set the hegith of the <Logo /> component to '80%' in Toolbar.js (see Toolbar.js),
  // we can accept the props here.

  // This is one way of adjusting this:
  // Setting the height as a property, where we simply pass the percentage height to the <Logo /> component (as we did in Toolbar.js),
  // and then in the component (so here in this file), assign it dynamically via inline styles.
  //   <div className={classes.Logo} style={{ height: props.height }}>
  <div className={classes.Logo}>
    <img src={burgerLogo} alt='Burger Builder' />
  </div>
);

export default logo;
