import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

import Player from './components/Player.js';
import PlayerList from './components/PlayerList.js';

it('renders without crashing', () => {
  rtl.render(<App />)
});

test('renders "World Cup Search Traffic" text', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/world cup search traffic/i));
});

test("Verify Player component renders with data", () => {
  const wrapper = rtl.render(<Player name="Patrick" country="United States" searches="0" />);

  expect(wrapper.getByText(/Patrick/i));
  expect(wrapper.getByText(/United States/i));
  expect(wrapper.getByText(/0/i));
});

