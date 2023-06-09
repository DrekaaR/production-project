import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Icon from 'shared/assets/icons/theme-dark.svg';
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
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {t('toggle')}
                <Icon />
            </button>
        </div>
    );
};
