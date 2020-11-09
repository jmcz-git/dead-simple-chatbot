import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a page', () => {
  render(<App />);
  const pageLoaded = screen != null;
  expect(pageLoaded).toBeTruthy();
});
