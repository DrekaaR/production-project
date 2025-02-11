import { getUserAuthData, isUserAdmin, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Flex, HStack } from 'shared/ui/Stack';
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
    const isAdmin = useSelector(isUserAdmin);

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
                <Flex className={cls.NavbarBody}>
                    {authData && (
                        <AppLink className={cls.createButton} to={RoutePath.article_create}>
                            {t('Create article')}
                        </AppLink>
                    )}
                </Flex>
                <Flex>
                    {authData ? (
                        <Dropdown
                            className={cls.userDropdown}
                            trigger={<Avatar size={40} src={authData?.avatar} />}
                            items={[
                                ...(isAdmin ? [{
                                    title: t('Admin panel'),
                                    href: RoutePath.admin_panel,
                                }] : []),
                                {
                                    title: t('Profile'),
                                    href: RoutePath.profile,
                                },
                                {
                                    title: t('Logout'),
                                    onClick: onLogout,
                                },
                            ]}
                        />
                    ) : (
                        <>
                            <Button
                                className={cls.loginButton}
                                theme={ButtonTheme.CLEAR}
                                onClick={onShowModal}
                            >
                                {t('Login')}
                            </Button>
                            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                        </>
                    )}
                    <ThemeSwitcher />
                    <LangSwitcher />
                </Flex>
            </HStack>
        </header>
    );
});
