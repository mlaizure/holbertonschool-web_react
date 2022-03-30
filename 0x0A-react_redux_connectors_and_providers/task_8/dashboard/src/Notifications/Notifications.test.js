/**
 * @jest-environment jsdom
 */
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const listNotifications = [
  {guid: 1, type: 'default', value: 'New course available'},
  {guid: 2, type: 'urgent', value: 'New resume available'},
  {guid: 3, type: 'urgent', html: { __html: getLatestNotification() }},
];

const listNotificationsDiff = [
  {guid: 1, type: 'default', value: 'New course available'},
  {guid: 2, type: 'urgent', value: 'New resume available'},
  {guid: 3, type: 'urgent', html: { __html: getLatestNotification() }},
  {guid: 4, type: 'default', value: 'Hey there ho there'}
];

describe('component rendering for Notifications', () => {
  it('renders Notifications without crashing', () => {
    shallow(<Notifications />);
  });

  // tests from props project task 5
  it('verifies Notifications renders correctly with no notificaitons', () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('[data-id="app-notifications"]')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).get(0).props.type).toEqual('default');
    expect(wrapper.find('ul').childAt(0).text()).toEqual('No new notification for now');
    const wrapper1 = mount(<Notifications displayDrawer={true} />);
    expect(wrapper1.find('[data-id="app-notifications"]')).toHaveLength(1);
    expect(wrapper1.find(NotificationItem)).toHaveLength(1);
    expect(wrapper1.find(NotificationItem).get(0).props.type).toEqual('default');
    expect(wrapper1.find('ul').childAt(0).text()).toEqual('No new notification for now');
  });

  it('verifies Notifications renders and has correct number of items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('[data-id="app-notifications"]')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('verifies correct message displayed with no notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('#notifIntro').exists()).toEqual(false);
    expect(wrapper.find('#noNotif').exists()).toEqual(true);
  });

  // tests from props project task 4
  it('verifies menu item displays when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications} />);
    expect(wrapper.find('div[data-id="menu-item"]').exists()).toEqual(true);
  });

  it('verifies div[data-id="app-notifications"] is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications} />);
    expect(wrapper.find('div[data-id="app-notifications"]').exists()).toEqual(false);
  });

  it('verifies menu item does not display when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('div[data-id="menu-item"]').exists()).toEqual(false);
  });

  it('verifies div.Notificaitons is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('div[data-id="app-notifications"]').exists()).toEqual(true);
  });

  // tests from intro project
  it('verifies that Notifications renders 3 NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('verifies the first NotificationItem has correct html', () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().text()).toEqual('New course available');
    expect(wrapper.find(NotificationItem).get(0).props.type).toEqual('default');
  });

  it('verifies that Notifications renders some specific text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
});

describe('verifies handle and hide DisplayDrawer called correctly', () => {
  it('verifies clicking on menu item calls handleDisplayDrawer', () => {
    const mockHandle = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={listNotifications} handleDisplayDrawer={mockHandle} />);
    const handleSpy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');
    wrapper.find('div[data-id="menu-item"]').simulate('click');
    expect(handleSpy).toBeCalled();
    handleSpy.mockRestore();
  });

  it('verifies clicking on close button calls hideDisplayDrawer', () => {
    const mockHide = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleHideDrawer={mockHide} />);
    const hideSpy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
    wrapper.find('button[data-id="close-notifications"]').simulate('click');
    expect(hideSpy).toBeCalled();
    hideSpy.mockRestore();
  });
});

describe('fetchNotifications', () => {
  it('verifies fetchNotifications is called when component mounted', () => {
    const mockFetch = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} fetchNotifications = {mockFetch} />);
    expect(mockFetch).toHaveBeenCalled();
  });
});
