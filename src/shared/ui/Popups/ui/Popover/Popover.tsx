import clsx from 'clsx';
import {
    Popover as HPopover, PopoverButton, PopoverPanel,
} from '@headlessui/react';
import { memo, ReactNode } from 'react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import cls from './Popover.module.scss';

interface PopoverProps{
    className?: string;
    trigger: ReactNode | string;
    children: ReactNode;
    anchor?: AnchorProps;
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className, trigger, children, anchor = 'bottom start',
    } = props;

    return (
        <HPopover className={clsx(cls.Popover, className)}>
            <PopoverButton className={cls.trigger}>{trigger}</PopoverButton>
            <PopoverPanel anchor={anchor} className={cls.body}>
                {children}
            </PopoverPanel>
        </HPopover>
    );
});
