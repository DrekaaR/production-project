import clsx from 'clsx';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin && isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={clsx(cls.AvatarDropdown, className)}
            trigger={<Avatar size={40} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable ? [{
                    title: t('Admin panel'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    title: t('Profile'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    title: t('Logout'),
                    onClick: onLogout,
                },
            ]}
        />
    );
});
