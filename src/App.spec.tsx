import { expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';

import App from './App';

test('adds 1 + 1 to equal 2', () => {
  expect(1 + 1).toBe(2);
});

test('show text to be Pokémon', () => {
  render(<App />);
  const title = screen.getByText('Pokémon');
  expect(title).toBeInTheDocument();
});
