import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';
import ForbiddenPage from './ForbiddenPage';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
