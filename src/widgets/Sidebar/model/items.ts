import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
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
];