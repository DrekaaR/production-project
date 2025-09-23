import clsx from 'clsx';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions, 
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import cls from './NavbarLoginAndUser.module.scss';

interface NavbarLoginAndUserProps {
    className?: string;
}

export const NavbarLoginAndUser = memo(({ className }: NavbarLoginAndUserProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin && isManager;

    if (!authData) {
        return (
            <div className={cls.NavbarLoginAndUser}>
                <Button
                    className={cls.loginButton}
                    theme={ButtonTheme.CLEAR}
                    onClick={onShowModal}
                >
                    {t('Login')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <Dropdown
            className={clsx(cls.NavbarLoginAndUser, cls.userDropdown)}
            trigger={<Avatar size={40} src={authData?.avatar} />}
            items={[
                ...(isAdminPanelAvailable ? [{
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

    );
});
