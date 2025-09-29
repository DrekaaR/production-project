import { ComponentMeta, ComponentStory } from '@storybook/react';
import image from '@/shared/assets/tests/stepan.jpg';
import { Avatar } from '../../../Avatar/Avatar';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    trigger: <Avatar src={image} size={60} />,
    items: [
        {
            title: 'Profile',
            href: 'profile-path',
        },
        {
            title: 'Logout',
            onClick: () => {},
        },
    ],
};
