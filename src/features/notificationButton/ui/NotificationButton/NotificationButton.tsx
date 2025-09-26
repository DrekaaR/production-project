import clsx from 'clsx';
import { NotificationList } from 'entities/Notification';
import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import BellIcon from 'shared/assets/icons/bell.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const authData = useSelector(getUserAuthData);

    if (!authData) {
        return null;
    }

    return (
        <Popover
            anchor="bottom"
            className={clsx(cls.NotificationButton, className)}
            trigger={(
                <Button theme={ButtonTheme.CLEAR} className={cls.button}>
                    <BellIcon />
                </Button>
            )}
        >
            <NotificationList className={cls.list} />
        </Popover>
    );
});
