import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';

export default {
    title: 'shared/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
