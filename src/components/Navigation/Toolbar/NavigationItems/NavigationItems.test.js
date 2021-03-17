import React from 'react';
// 'shallow' is the best way of rendering React components in many circumstances -
// Enzyme offers two alternatives, but you should 'shallow' as often as possible.
// And that's because, one thing 'shallow' does, is it renders a component with all its content,
// but the content isn't DEEPLY rendered (that's why it's called 'shallow').
// The content is not rendered and is only rendered as placeholders.
// And this is important for creating isolated tests where we don't, then, render a whole sub-tree of components.
// We just want to render this component (e.g., <NaivigationItems />) and know what's inside of it
// without rendering everything that is nested inside its included components.
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// Configure Enzyme and connect it to React.
configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
  // The 'beforeEach' function will automatically be executed BEFORE EACH of the tests.
  // Since we use 'wrapper' more than once in our tests, we can do it this way.
  // This will make the 'wrapper' variable available in all our tests.
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render two <NaivigationItems /> elements if not authenticated', () => {
    // Render component shallow-ly and store it in the 'wrapper' constant.
    // const wrapper = shallow(<NavigationItems />);

    // Look into the wrapper.
    // We expect to find 2 'NavigationItem' components.
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render three <NaivigationItems /> elements if authenticated', () => {
    // To see if it renders 3 items if authenticated, we need to pass the 'isAuthenticated' prop.
    // Passing it here as 'isAuthenticated' will automatically pass it as 'true'.
    // const wrapper = shallow(<NavigationItems isAuthenticated />);

    // OPTIONE 1:
    // wrapper = shallow(<NavigationItems isAuthenticated />);

    // OPTION 2 - using the 'setProps' Enzyme helper method.
    // This can be used on anything that stores a shallowy or other rendered React element.
    wrapper.setProps({ isAuthenticated: true });
    // We expect to find 3 'NavigationItem' components.
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should render logout if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    // We want to check for the existence of one specific node (we use 'contains' for nodes) - the one with the "Logout" text.
    expect(
      wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)
    ).toEqual(true);
  });
});
