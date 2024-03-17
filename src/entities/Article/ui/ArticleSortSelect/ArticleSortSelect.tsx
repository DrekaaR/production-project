import { ArticleSortField } from 'entities/Article/model/types/article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import cls from './ArticleSortSelect.module.scss';

interface ArticleSortSelectProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newOrder: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
    const {
        className, order, onChangeOrder, onChangeSort, sort, 
    } = props;
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);

    const sortFilledOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date of creation'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('by title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('by views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select
                options={sortFilledOptions}
                label={t('Sort by')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('By')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
