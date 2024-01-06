import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const data = [
    {
        id: '1',
        text: "I disagree with the author's viewpoint.",
        articleId: '1',
        userId: 1,
    },
    {
        id: '2',
        text: 'Great article!',
        articleId: '1',
        userId: 2,
    },
];

export const Normal = Template.bind({});
Normal.args = {
    comments: [{
        id: '1',
        text: "I disagree with the author's viewpoint.",
        user: {
            id: '1',
            avatar: '2',
            username: 'master',
        },
    }],
};
