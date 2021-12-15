import React from 'react';
import enzyme, {shallow} from 'enzyme';
import App from '../App';

import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });


test('render app correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('h1').text()).toEqual('Book Meeting');
});
