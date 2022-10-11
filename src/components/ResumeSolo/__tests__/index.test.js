import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component renders', () => {
  // baseline test
  it('renders', () => {
    render(<Modal
    currentPhoto = {currentPhoto}
    toggleModal={mockToggleModal}
    />);
  });

  it('renders', () => {
    //snapshot test
    const { asFragment } = render(<Modal 
      currentPhoto = {currentPhoto}
      toggleModal={mockToggleModal}/>)
    expect(asFragment()).toMatchSnapshot()
  })
})

it('renders', () => {
  const { getByRole } = render(<Modal 
    currentPhoto = {currentPhoto}
    toggleModal={mockToggleModal}/>)
  expect(getByRole('button')).toHaveTextContent('Close this modal')
})

describe('Click Event', () => {
  it('calls onClose handler', () => {
    // Arrange: Render Modal
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
    // Act: Simulate click event
    fireEvent.click(getByText('Close this modal'));
    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})  


