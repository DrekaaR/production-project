import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import stepan from 'shared/assets/tests/stepan.jpg';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const formData = {
    first: 'Alex',
    lastname: 'Troshin',
    country: Country.Russia,
    currency: Currency.RUB,
    username: 'Alex2t',
    avatar: stepan,
    age: 27,
    city: 'Ufa',
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        form: formData,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        form: formData,
    },
}), ThemeDecorator(Theme.DARK)];
