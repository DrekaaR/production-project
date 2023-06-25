import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Loader } from '../Loader/Loader';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    theme: ButtonTheme.FILLED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.FILLED,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.FILLED,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.FILLED,
};

export const Loading = Template.bind({});
Loading.args = {
    children: <Loader small />,
    theme: ButtonTheme.FILLED,
};
