import { NotificationsContainer } from "./NotificationsContainer"
import { shallow, mount } from 'enzyme';
import React from 'react';

describe("fetchNotifications", () => {
  it('verifies fetchNotifications is called when component mounted', () => {
    const mockFetch = jest.fn();
    const wrapper = shallow(<NotificationsContainer displayDrawer={true} fetchNotifications={mockFetch} />);
    expect(mockFetch).toHaveBeenCalled();
  })
})
