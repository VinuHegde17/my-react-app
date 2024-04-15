import { render, screen } from '@testing-library/react';
import App from './App';

test('Test first react app', () => {
  render(<App />);
  const text = screen.getByText("Hello Everyone");
  expect(text).toBeInTheDocument();
});
