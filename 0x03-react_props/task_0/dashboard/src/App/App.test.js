import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('component rendering', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });
});
