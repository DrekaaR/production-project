import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';

export const StoreDecorator = (story: () => Story) => (
    <StoreProvider>
        {story()}
    </StoreProvider>
);
