import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('testing WithLogging HOC', () => {
  it('verifies console.log is called on mount and unmount when wrapped component is HTML', () => {
    const spy = jest.spyOn(console, 'log');
    const TestComponent = WithLogging(() => <p />);
    const wrapper = shallow(<TestComponent />);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
    spy.mockRestore();
  });

  it('verifies console.log was called on mount and unount with the name of the component with Login component', () => {
    const spy = jest.spyOn(console, 'log');
    const TestComponent = WithLogging(Login);
    const wrapper = shallow(<TestComponent />);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
    spy.mockRestore();
  });
});
