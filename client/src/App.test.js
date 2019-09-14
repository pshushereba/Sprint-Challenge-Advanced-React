import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

it('renders without crashing', () => {
  rtl.render(<App />)
});