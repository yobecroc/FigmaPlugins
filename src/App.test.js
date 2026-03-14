// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FigmaPluginsSdk title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FigmaPluginsSdk/i);
    expect(titleElement).toBeInTheDocument();
});
