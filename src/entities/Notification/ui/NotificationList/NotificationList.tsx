import clsx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useNotifications } from '../../api/notificationApi';
import { Notification } from '../../model/types/notification';
import { NotificationItemSkeleton } from '../../ui/NotificationItem/NotificationItemSkeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((_, index) => (
        <NotificationItemSkeleton key={index} />
    ));

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: notifications, error, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    const renderNotifications = (notification: Notification) => (
        <NotificationItem item={notification} key={notification.id} />
    );

    if (error) {
        return (
            <Text text={t('Error while loading notifications list')} />
        );
    }

    if (!isLoading && !notifications?.length) {
        return (
            <div className={clsx(cls.NotificationList, className)}>
                <Text title={t('No notifications were found')} size={TextSize.M} />
            </div>
        );
    }

    return (
        <div className={clsx(cls.NotificationList, className)}>
            {notifications?.length ? notifications?.map(renderNotifications) : null}
            {isLoading && getSkeletons()}
        </div>
    );
});
