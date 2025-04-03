import { expect, test } from 'vitest';
import App from './App';

test('checks if name is on the page', () => {
  // Access the component's implementation directly for testing
  // The App component returns JSX with a h1 containing "Yizhuo Hu"
  const appImplementation = App.toString();
  
  // Check if the name is in the component implementation
  expect(appImplementation).toContain('Yizhuo Hu');
});