import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

const notification: Notification = {
    id: '1',
    title: 'New Message Received',
    description: 'You have received a new message from John Doe.',
};

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: 1 },
                { ...notification, id: 2 },
                { ...notification, id: 3 },
            ],
        },
    ],
};
