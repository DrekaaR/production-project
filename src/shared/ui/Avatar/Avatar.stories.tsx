import { ComponentMeta, ComponentStory } from '@storybook/react';
import stepan from '@/shared/assets/tests/stepan.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: stepan,
};

export const Small = Template.bind({});
Small.args = {
    src: stepan,
    size: 50,
};
