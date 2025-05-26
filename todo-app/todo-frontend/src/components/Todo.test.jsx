import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Todo from '../Todos/Todo';

test('renders todo text', () => {
  const todo = { text: 'learn testing' };
  render(<Todo todo={todo} />);
  expect(screen.getByText('learn testing')).toBeInTheDocument();
});
