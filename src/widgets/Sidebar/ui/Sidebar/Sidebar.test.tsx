import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import { Sidebar } from '../..';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toHaveClass('collapsed');
    });
});
