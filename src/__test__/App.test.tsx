
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Evenito Demo/i);
  expect(linkElement).toBeInTheDocument();
});
