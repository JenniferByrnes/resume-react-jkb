import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component renders', () => {
  // baseline test
  it('renders', () => {
    render(<Contact
    />);
  });

  it('renders', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
})

it('renders', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('contact-me')).toHaveTextContent('Contact me')
})

it('renders', () => {
  const { getByRole } = render(<Contact />)
  expect(getByRole('button')).toHaveTextContent('Submit')
})



