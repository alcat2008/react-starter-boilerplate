import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Foo from '../Foo';

describe('Foo component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Foo />, div);
  });

  it('renders the correct text', () => {
    const fooCompoent = shallow(<Foo />);
    expect(fooCompoent.find('.foo').text()).toEqual('I am Foo!');
  });
});
