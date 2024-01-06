import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatarImage from 'shared/assets/tests/stepan.jpg';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const data = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur ex facilis obcaecati officia officiis repellat. Cupiditate dignissimos libero quas!',
    id: '1',
    user: {
        id: '1',
        avatar: avatarImage,
        username: 'Admin',
    },
};

export const Normal = Template.bind({});
Normal.args = {
    comment: data,
};
