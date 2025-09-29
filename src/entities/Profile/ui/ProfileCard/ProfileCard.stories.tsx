import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { ConstCurrency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import stepan from '@/shared/assets/tests/stepan.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    data: {
        first: 'Alex',
        lastname: 'Troshin',
        country: Country.Russia,
        currency: ConstCurrency.RUB,
        avatar: stepan,
        username: 'Alex2t',
        age: 27,
        city: 'Ufa',
    },
};
export const LightWithError = Template.bind({});
LightWithError.args = {
    error: 'Error',
};
export const LightWithLoading = Template.bind({});
LightWithLoading.args = {
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        first: 'Alex',
        lastname: 'Troshin',
        country: Country.Russia,
        currency: ConstCurrency.RUB,
        avatar: stepan,
        username: 'Alex2t',
        age: 27,
        city: 'Ufa',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const DarkWithError = Template.bind({});
DarkWithError.args = {
    error: 'Error',
};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK)];
export const DarkWithLoading = Template.bind({});
DarkWithLoading.args = {
    isLoading: true,
};
DarkWithLoading.decorators = [ThemeDecorator(Theme.DARK)];
