import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
});

test('renders counter message', () => {
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const counterValue = screen.getByTestId('count');
    expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    const incrementButton = screen.getByRole('button', { name: /\+/i });
    userEvent.click(incrementButton);
    const counterValue = screen.getByTestId('count');
    expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
    const decrementButton = screen.getByRole('button', { name: /-/i });
    userEvent.click(decrementButton);
    const counterValue = screen.getByTestId('count');
    expect(counterValue).toHaveTextContent('-1');
});
