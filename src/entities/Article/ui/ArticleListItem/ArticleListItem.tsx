import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import ViewIcon from '@/shared/assets/icons/eye.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Flex, HStack } from '@/shared/ui/Stack';
import { ArticleBlockType, ArticleView } from '../../model/const/articleConst';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target,
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
        <HStack gap="4" className={cls.views}>
            {String(article.views)}
            <ViewIcon />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <HStack gap="22" justify="between" align="start" className={cls.header}>
                    <div>
                        <HStack gap="8" className={cls.author}>
                            <Avatar src={article.user?.avatar} size={50} />
                            {article.user?.username}
                        </HStack>
                        {title}
                        <HStack gap="4" wrap className={cls.tags}>
                            {article.type.map((tag) => (
                                <Flex center key={tag}>{tag}</Flex>
                            ))}
                        </HStack>
                    </div>
                    {date}
                </HStack>
                {image}
                {textBlock && (
                    <ArticleTextBlockComponent className={cls.text} block={textBlock} />
                )}
                <HStack gap="16" justify="between" className={cls.footer}>
                    <AppLink target={target} to={RoutePath.article_details + article.id}>
                        <Button theme={ButtonTheme.OUTLINE}>
                            {t('Show more')}
                        </Button>
                    </AppLink>
                    {views}
                </HStack>
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
                    <HStack gap="8" justify="between">
                        {article.type.join(', ')}
                        {views}
                    </HStack>
                    {title}
                </div>
            </AppLink>
        </article>
    );
});
