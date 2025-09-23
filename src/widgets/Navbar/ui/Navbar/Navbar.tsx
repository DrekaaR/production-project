import { NotificationList } from 'entities/Notification';
import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BellIcon from 'shared/assets/icons/bell.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Popover } from 'shared/ui/Popups';
import { Flex, HStack } from 'shared/ui/Stack';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { NavbarLoginAndUser } from '../NavbarLoginAndUser/NavbarLoginAndUser';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

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
                    <Popover
                        anchor="bottom"
                        trigger={(
                            <Button theme={ButtonTheme.CLEAR} className={cls.button}>
                                <BellIcon />
                            </Button>
                        )}
                    >
                        <NotificationList />
                    </Popover>
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
