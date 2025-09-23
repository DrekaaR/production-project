import clsx from 'clsx';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    return (
        <VStack gap="4" className={clsx(cls.NotificationItem, className)}>
            <div className={cls.title}>{item.title}</div>
            <div className={cls.description}>{item.description}</div>
        </VStack>
    );
});
