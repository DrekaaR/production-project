import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { Navbar } from '..';

describe('Navbar', () => {
    test('Test render', () => {
        componentRender(<Navbar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
