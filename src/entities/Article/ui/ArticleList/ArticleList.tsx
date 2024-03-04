import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleView.BIG,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {new Array(view === ArticleView.SMALL ? 9 : 3)
                    .fill(0)
                    .map((item, index) => (
                        <ArticleListItemSkeleton key={index} view={view} />
                    ))}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            isLoading={isLoading}
            key={article.id}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
        </div>
    );
});
