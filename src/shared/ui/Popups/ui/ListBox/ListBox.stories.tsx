import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox, ListBoxItem } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items: ListBoxItem[] = [
    {
        content: 'Toyota',
        value: 'toyota',
    },
    {
        content: 'Honda',
        value: 'honda',
    },
    {
        content: 'BMW',
        value: 'bmw',
        disabled: true,
    },
    {
        content: 'Tesla',
        value: 'tesla',
    },
];

export const Default = Template.bind({});
Default.args = {
    value: undefined,
    onChange: (value: string) => {},
    placeholder: 'Choose mark',
    items,
};
