import { ComponentMeta, ComponentStory } from '@storybook/react';
import testImage from '@/shared/assets/tests/stepan.jpg';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const data = [
    {
        id: '1',
        text: 'Comment 1',
        user: {
            id: '1',
            avatar: testImage,
            username: 'user 1',
        },
    },
    {
        id: '2',
        text: 'Comment 2',
        user: {
            id: '2',
            avatar: testImage,
            username: 'user 2',
        },
    },
];

export const Primary = Template.bind({});
Primary.args = {
    comments: data,
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const NotFound = Template.bind({});
NotFound.args = {
    comments: [],
};
