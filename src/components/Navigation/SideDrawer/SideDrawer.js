import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/Toolbar/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

// This side drawer component will only be visible on small size mobile screens.
const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      {/* Since 'show' is a Boolean property, you don't need to assign a value and say 'show={true}' if it's true.
      You can just say 'show'. Just by adding it, it will be set to 'true'. */}
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
