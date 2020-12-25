import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
  // Output 'props.children' so that we can use this button like a normal button
  // and simply wrap the content, which should go inside, with our custom button element.

  // For the className, we want a style for the button ('.Button),
  // and we also want to have a style conditionally: the .Success or .Danger style,
  // depending on a condition --> so, 'props.btnType' (which we set from outside of this component).
  // To do this, we use an array for all of this.
  // Finally, whatever we pass to className has to be a string, but we have an array of strings.
  // So we need to change this by using 'join' to join it with an empty space,
  // to have a list of classes, which is a string in the end.
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
