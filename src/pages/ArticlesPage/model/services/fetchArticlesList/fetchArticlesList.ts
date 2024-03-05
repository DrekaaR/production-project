import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e: any) {
            return rejectWithValue('Something went wrong');
        }
    },
);
