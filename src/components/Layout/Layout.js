import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      // Auxiliary higher-order component to wrap and immediately output this component.
      // That way, we can have adjacent elements here (<div> and <main>).
      // This will be in the 'hoc' folder in the 'Auxiliary.js' file.
      // And we need to import it here in this file with a capital "A" --> import Aux from '../../hoc/Auxiliary'
      // Then we can wrap everything here with this <Aux>
      <Aux>
        {/* Use 'main': We want to output the component we wrap with this 'layout', so we need to use 'props.children'.
        This allows us to use this 'layout' component as a wrapper around the core content component we want to render
        to the screen. */}
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
