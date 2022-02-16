import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('component rendering for NotificationItem', () => {
  it('renders item without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct item with type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct item with type and html props', () => {
    const wrapper = shallow(<NotificationItem type='default' html={{ __html: '<u>test</u>' }} />)
    expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });
});
