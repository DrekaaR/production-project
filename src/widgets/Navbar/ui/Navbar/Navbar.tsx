import { NotificationList } from 'entities/Notification';
import { getUserAuthData } from 'entities/User';
import { NotificationButton } from 'features/notificationButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BellIcon from 'shared/assets/icons/bell.svg';
import { useMediaQuery } from 'react-responsive';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Flex, HStack } from 'shared/ui/Stack';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { NavbarLoginAndUser } from '../NavbarLoginAndUser/NavbarLoginAndUser';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
    const { t } = useTranslation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onDrawerOpen = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onDrawerClose = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

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
                    {isMobile ? (
                        <>
                            <Button onClick={onDrawerOpen} theme={ButtonTheme.CLEAR} className={cls.notificationButton}>
                                <BellIcon />
                            </Button>
                            <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
                                <NotificationList />
                            </Drawer>
                        </>
                    ) : <NotificationButton />}
                </Flex>
                <Flex>
                    <NavbarLoginAndUser />
                    <ThemeSwitcher />
                    <LangSwitcher />
                </Flex>
            </HStack>
        </header>
    );
});
