import clsx from 'clsx';
import { memo, ReactNode, useCallback } from 'react';
import { Mods } from '../../lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, children, onClose, isOpen,
    } = props;

    const closeHandler = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <div className={clsx(cls.Drawer, className, mods)}>
            <Overlay onClick={closeHandler} />
            <div className={cls.wrapper}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>

    );
});
