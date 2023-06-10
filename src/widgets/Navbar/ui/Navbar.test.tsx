import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import { Navbar } from 'widgets/Navbar';

describe('Navbar', () => {
    test('Test render', () => {
        renderWithTranslation(<Navbar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
