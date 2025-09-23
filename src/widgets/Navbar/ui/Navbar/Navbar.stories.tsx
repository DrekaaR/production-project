import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];

export const DarkMode = Template.bind({});
DarkMode.args = {};
DarkMode.decorators = [StoreDecorator({ }), ThemeDecorator(Theme.DARK)];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: { authData: { username: 'user', id: '1' } },
})];

export const AuthNavbarDark = Template.bind({});
AuthNavbarDark.args = {};
AuthNavbarDark.decorators = [StoreDecorator({
    user: { authData: { username: 'user', id: '1' } },
})];
AuthNavbarDark.decorators.push(ThemeDecorator(Theme.DARK));
