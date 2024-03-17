import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ViewIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView, 
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, isLoading, target,
    } = props;
    const { t } = useTranslation('article');

    const date = <div className={cls.date}>{article.createdAt}</div>;
    const title = <h2 className={cls.title}>{article.title}</h2>;
    const image = (
        <div className={cls.image}>
            <img src={article.img} alt={article.title} />
        </div>
    );
    const views = (
        <div className={cls.views}>
            {String(article.views)}
            <ViewIcon />
        </div>
    );

    if (isLoading) {
        return <ArticleListItemSkeleton view={view} />;
    }

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <div>
                        <div className={cls.author}>
                            <Avatar src={article.user?.avatar} size={50} />
                            {article.user?.username}
                        </div>
                        {title}
                        <div className={cls.tags}>
                            {article.type.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    {date}
                </div>
                {image}
                {textBlock && (
                    <ArticleTextBlockComponent className={cls.text} block={textBlock} />
                )}
                <div className={cls.footer}>
                    <AppLink target={target} to={RoutePath.article_details + article.id}>
                        <Button theme={ButtonTheme.OUTLINE}>
                            {t('Show more')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </article>
        );
    }

    return (
        <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink
                target={target}
                to={RoutePath.article_details + article.id}
                className={cls.body}
            >
                {date}
                {image}
                <div className={cls.content}>
                    <div className={cls.contentInfo}>
                        {article.type.join(', ')}
                        {views}
                    </div>
                    {title}
                </div>
            </AppLink>
        </article>
    );
});
