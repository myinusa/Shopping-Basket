import React from 'react';
import { render, screen } from '@testing-library/react';
import {TableContainer} from './TableContainer';

test('renders Table Container', () => {
  render(<TableContainer />);
  const headingElement = screen.getByText(/Review Your Order/i);
  expect(headingElement).toBeInTheDocument();
});

