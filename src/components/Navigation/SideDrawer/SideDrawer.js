import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/Toolbar/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

// This side drawer component will only be visible on small size mobile screens.
const sideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
