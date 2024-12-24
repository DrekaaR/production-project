import clsx from 'clsx';
import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useGetArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useGetArticleRecommendationsList(3);

    return (
        <VStack gap="16" className={clsx(className)}>
            <Text title={t('Recommendations')} />
            {isLoading && <Loader />}
            {error && <Text text={t('Error while loading recommendations list')} />}
            {articles && (
                <ArticleList
                    view={ArticleView.SMALL}
                    articles={articles}
                    isLoading={isLoading}
                    target="_blank"
                />
            )}
        </VStack>
    );
});
