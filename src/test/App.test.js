import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  const {getBytexxt}=render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
