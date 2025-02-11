import clsx from 'clsx';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;

    return (
        <Page className={clsx(cls.AdminPanelPage, className)}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>AdminPanelPage</div>
        </Page>
    );
});

export default AdminPanelPage;
