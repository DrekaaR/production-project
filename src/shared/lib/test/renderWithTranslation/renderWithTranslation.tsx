import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export const renderWithTranslation = (component: ReactNode) => render(
    <I18nextProvider i18n={i18nForTest}>
        <BrowserRouter>
            {component}
        </BrowserRouter>
    </I18nextProvider>,
);
