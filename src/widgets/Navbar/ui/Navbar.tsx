import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div
            data-testid="navbar"
            className={classNames(cls.Navbar, {}, [className])}
        >
            <div className={classNames(cls.NavbarBody, {}, [])}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    type="button"
                    onClick={onToggleModal}
                >
                    {t('Login')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {t('lorem  lorem lorem')}
                </Modal>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};
