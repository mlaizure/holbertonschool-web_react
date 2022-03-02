/**
 * @jest-environment jsdom
 */

import React from 'react';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('component rendering for NotificationItem', () => {
  it('renders item without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct item with type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.text()).toEqual('test');
    expect(wrapper.props()['data-notification-type']).toEqual('default');
  });

  it('renders correct item with type and html props', () => {
    const wrapper = shallow(<NotificationItem type='default' html={{ __html: '<u>test</u>' }} />)
    expect(wrapper.html()).toContain('<u>test</u>');
    expect(wrapper.props()['data-notification-type']).toEqual('default');
  });
});

describe('clicking on notification', () => {
  it('verifies correct id is sent', () => {
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'}
    ];

    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const markSpy = jest.spyOn(wrapper.instance(), 'markAsRead');
    wrapper.find('li').first().simulate('click');
    expect(markSpy).toBeCalledWith(1);
    wrapper.find('li').last().simulate('click');
    expect(markSpy).toBeCalledWith(2);
    markSpy.mockRestore();
  });
});
