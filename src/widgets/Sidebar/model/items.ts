import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import UserIcon from 'shared/assets/icons/user.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main page',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About page',
    },
    {
        path: RoutePath.profile,
        Icon: UserIcon,
        text: 'Profile page',
    },
];
