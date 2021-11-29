import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
  userEvent.click(screen.getByText(/Greeting/i))
  expect(screen.getByText(/Yamil/i)).toBeInTheDocument();
});
