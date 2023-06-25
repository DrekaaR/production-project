import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div
            data-testid="navbar"
            className={classNames(cls.Navbar, {}, [className])}
        >
            <div className={classNames(cls.NavbarBody, {}, [])}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    type="button"
                    onClick={onShowModal}
                >
                    {authData ? t('Logout') : t('Login')}

                </Button>
                {!authData && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};
