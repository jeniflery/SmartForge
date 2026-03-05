// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartForge/i);
    expect(titleElement).toBeInTheDocument();
});
