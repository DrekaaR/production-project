import {
    Button as HButton, Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import clsx from 'clsx';
import { Fragment, memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cls from './Dropdown.module.scss';

interface MenuItemType {
    title: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: MenuItemType[];
    anchor?: AnchorProps
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        trigger,
        items,
        anchor = {
            to: 'top end',
            gap: 10,
        },
    } = props;

    return (
        <div className={clsx(cls.Dropdown, className)}>
            <Menu>
                <MenuButton className={cls.trigger}>{trigger}</MenuButton>
                <MenuItems
                    className={clsx(cls.menu)}
                    anchor={anchor}
                >
                    {items.map((item) => (
                        <MenuItem key={item.title} as={Fragment} disabled={item.disabled}>
                            {item.href ? (
                                <HButton as={Link} to={item.href} className={cls.item}>
                                    {item.title}
                                </HButton>
                            ) : (
                                <HButton onClick={item.onClick} className={cls.item}>
                                    {item.title}
                                </HButton>
                            )}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </div>
    );
});
