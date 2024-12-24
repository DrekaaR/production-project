import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: { limit },
            }),
        }),
    }),
    overrideExisting: false,
});

export const useGetArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
