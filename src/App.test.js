import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

const textGreeting = jest.fn(()=>"Hello mr Johnk")

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
  userEvent.click(screen.getByText(/Greeting/i))
  expect(textGreeting("")).toBe("Hello mr Johnk")
  expect(screen.getByText(/Yamil/i)).toBeInTheDocument();
});
