import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut consequatur culpa, debitis eius error ipsa laboriosam mollitia nulla pariatur quae quaerat quo rem sed suscipit temporibus voluptas voluptatum.',
};
