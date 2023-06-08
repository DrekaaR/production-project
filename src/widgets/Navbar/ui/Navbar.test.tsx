import { render, screen } from '@testing-library/react';
import { Navbar } from 'widgets/Navbar';

describe('Navbar', () => {
    test('Test render', () => {
        render(<Navbar />);
        expect(screen.getByTestId('about')).toBeInTheDocument();
    });
});
