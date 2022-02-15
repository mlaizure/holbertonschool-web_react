import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('component rendering for Notifications', () => {
  it('renders Notifications without crashing', () => {
    shallow(<Notifications />);
  });

  // tests from props project
  it('verifies menu item displays when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem').exists()).toEqual(true);
  });

  it('verifies div.Notifications is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toEqual(false);
  });

  it('verifies menu item displays when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem').exists()).toEqual(true);
  });

  it('verifies div.Notificaitons is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toEqual(true);
  });

  // tests from intro project
  it('verifies that Notifications renders 3 NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('verifies the first NotificationItem has correct html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it('verifies that Notifications renders some specific text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
});
