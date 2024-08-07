import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = memo(({ className }: NavbarProps) => {
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
        <header
            data-testid="navbar"
            className={cls.Navbar}
        >
            <HStack gap="32" justify="between">
                <HStack className={cls.NavbarBody}>
                    <Button
                        className={cls.loginButton}
                        theme={ButtonTheme.CLEAR}
                        type="button"
                        onClick={authData ? onLogout : onShowModal}
                    >
                        {authData ? t('Logout') : t('Login')}
                    </Button>
                    {authData && (
                        // eslint-disable-next-line i18next/no-literal-string
                        <AppLink className={cls.createButton} to={RoutePath.article_create}>
                            Create article
                        </AppLink>
                    )}
                    {!authData && (
                        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                    )}
                </HStack>
                <HStack>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </HStack>
            </HStack>
        </header>
    );
});
