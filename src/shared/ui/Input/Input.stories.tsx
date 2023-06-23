import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Login',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    placeholder: 'Login',
};
