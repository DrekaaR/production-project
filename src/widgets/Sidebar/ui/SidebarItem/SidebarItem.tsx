import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item?.authOnly && !isAuth) {
        return null;
    }

    if (!item) {
        return null;
    }

    const mods: Mods = {
        [cls.collapsed]: collapsed,
    };

    return (
        <li className={classNames(cls.SidebarItem, mods)}>
            <AppLink to={item.path} className={cls.link}>
                <HStack gap="8">
                    <item.Icon className={cls.icon} />
                    <span className={cls.title}>
                        {t(item.text)}
                    </span>
                </HStack>
            </AppLink>
        </li>
    );
};
