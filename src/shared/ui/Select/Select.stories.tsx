import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const optionsExample = [
    { value: '1', content: 'option №1' },
    { value: '2', content: 'option №2' },
    { value: '3', content: 'option №3' },
];

export const Primary = Template.bind({});
Primary.args = {
    options: optionsExample,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'With label',
    options: optionsExample,
};
