import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div
            data-testid="navbar"
            className={classNames(cls.Navbar, {}, [className])}
        >
            <div className={classNames(cls.NavbarBody, {}, [])}>
                <div className={cls.links}>
                    /
                </div>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};
