import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <ul className={cls.items}>
                <li>
                    <AppLink to="/">
                        {t('Main')}
                    </AppLink>
                </li>
                <li>
                    <AppLink to="/about">
                        {t('About')}
                    </AppLink>
                </li>
            </ul>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.FILLED}
                size={ButtonSize.M}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};
