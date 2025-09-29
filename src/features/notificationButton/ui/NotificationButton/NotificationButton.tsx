import clsx from 'clsx';
import { memo, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NotificationList } from '@/entities/Notification';
import BellIcon from '@/shared/assets/icons/bell.svg';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Popover } from '@/shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onDrawerOpen = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onDrawerClose = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onDrawerOpen} theme={ButtonTheme.CLEAR} className={cls.trigger}>
            <BellIcon />
        </Button>
    );

    return (
        isMobile ? (
            <AnimationProvider>
                {trigger}
                <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
                    <NotificationList />
                </Drawer>
            </AnimationProvider>
        ) : (
            <Popover
                anchor="bottom"
                className={clsx(cls.NotificationButton, className)}
                trigger={trigger}
            >
                <NotificationList className={cls.list} />
            </Popover>
        )
    );
});
