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
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
];

const listNotificationsDiff = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
  {id: 4, type: 'default', value: 'Hey there ho there'}
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

describe('markAsRead and console.log', () => {
  it('verifies console.log called in markAsread', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const id = 1;
    wrapper.instance().markAsRead(id);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });
});

describe('checking component updates only when props change', () => {
  it('verifies component does not rerender with the same props', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate({ listNotifications })).toEqual(false);
  });

  it('verifies component rerenders with different props', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate({ listNotifications: listNotificationsDiff })).toEqual(true);
  });
});
