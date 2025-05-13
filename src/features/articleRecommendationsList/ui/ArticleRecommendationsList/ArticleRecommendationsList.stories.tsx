import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 1234,
    user: { id: '1', username: 'test' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asdas',
};

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: 1 },
                { ...article, id: 2 }],
        },
    ],
};
