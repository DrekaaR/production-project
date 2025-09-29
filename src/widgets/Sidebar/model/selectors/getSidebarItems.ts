import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import UserIcon from '@/shared/assets/icons/user.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Main Page',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About Page',
            },

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: UserIcon,
                    text: 'Profile Page',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Articles Page',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
