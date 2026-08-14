// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuantumFlux title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuantumFlux/i);
    expect(titleElement).toBeInTheDocument();
});
