import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  // Arrange
  it('inserts emoji into the h2', () => {

    // Assert
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText('camera')).toHaveTextContent('📸');

  })
})

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})

