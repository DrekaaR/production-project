import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import cls from './NotificationItem.module.scss';

interface NotificationItemSkeletonProps {
    className?: string;
}

export const NotificationItemSkeleton = memo((props: NotificationItemSkeletonProps) => {
    const { className } = props;

    return (
        <VStack gap="8" className={classNames(cls.NotificationItemSkeleton, {}, [className])}>
            <Skeleton width={100} height={15} />
            <Skeleton width={270} height={50} />
        </VStack>
    );
});
