import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleView } from '../../model/const/articleConst';
import cls from './ArticleListItem.module.scss';

export interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;
    const additional = [className, cls[view], cls.loading];

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, additional)}>
                <HStack justify="between" align="start" gap="12" className={cls.header}>
                    <VStack gap="12">
                        <HStack gap="8">
                            <Skeleton borderRadius="50%" height={50} width={50} />
                            <Skeleton height={21} width={50} />
                        </HStack>
                        <Skeleton height={30} width={400} />
                        <HStack gap="8" wrap>
                            <Skeleton width={25} height={20} />
                            <Skeleton width={60} height={20} />
                            <Skeleton width={70} height={20} />
                        </HStack>
                    </VStack>
                    <Skeleton height={21} width={80} />
                </HStack>
                <Skeleton height={240} width="100%" className={cls.image} />
                <HStack justify="between" gap="8" className={cls.footer}>
                    <Skeleton height={45} width={125} />
                    <Skeleton className={cls.views} height={21} width={60} />
                </HStack>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, additional)}>
            <Skeleton className={cls.date} height={21} width={50} />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Skeleton height={300} width="100%" borderRadius="10px 10px 0 0" />
            <div className={cls.content}>
                <div className={cls.contentInfo}>
                    <Skeleton height={21} width={60} />
                    <Skeleton className={cls.views} height={21} width={30} />
                </div>
                <Skeleton className={cls.title} height={21} width={200} />
            </div>
        </div>
    );
});
