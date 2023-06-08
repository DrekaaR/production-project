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
        <div data-tesid="about" className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.NavbarBody, {}, [])}>
                <div className={cls.links}>
                    <AppLink to="/">{t('Main')}</AppLink>
                    <AppLink to="/about">{t('About')}</AppLink>
                </div>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};
