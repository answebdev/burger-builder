import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => (
  // Auxiliary higher-order component to wrap and immediately output this component.
  // That way, we can have adjacent elements here (<div> and <main>).
  // This will be in the 'hoc' folder in the 'Auxiliary.js' file.
  // And we need to import it here in this file with a capital "A" --> import Aux from '../../hoc/Auxiliary'
  // Then we can wrap everything here with this <Aux>
  <Aux>
    {/* Use 'main': We want to output the component we wrap with this 'layout', so we need to use 'props.children'.
    This allows us to use this 'layout' component as a wrapper around the core content component we want to render
    to the screen. */}
    <div>Toolbar, SideDrawer, Backdrop</div>

    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
