import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const article:Article = {
    id: '1',
    title: 'JavaScript для начинающих. Урок 1',
    img: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg',
    views: 1022,
    createdAt: '27.09.2023',
    tags: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Вступление',
            paragraphs: [
                'JavaScript - язык программирования!',
                'По некоторым исследованиям, кстати, самый популярный. И уж точно один из самых простых для входа в IT.',
                'В целом, веб-разработка - то место, на мой взгляд, которое весьма лояльно относится к новичкам и дает большое количество возможностей. Так что возрадуйтесь, дорогие молодые разработчики со всего мира, кто сейчас читает эту статью.',
                'Во многом, язык популярен благодаря развитию веба. Ведь он монополизировал браузер и является, за редкими исключениями, единственным языком способным делать анимации и формочки валидировать делать почти сколь угодно сложную логику на клиенте (в браузере)',
                'Современный веб - это не лэндосики и интернет магазины из 2000-х, а, по большей части, достаточно сложные и интересные веб приложения. Помимо клиентской логики JS также популярен на сервере. И там его популярность растет год от года. Еще JS позволяет писать мобильные приложения и даже немного на десктоп замахивается.\nВ общем, язык один, а возможностей много.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.TEXT,
            title: 'Погнали (Hello world)',
            paragraphs: [
                'Принято в мире IT начинать изучение чего либо с "hello world" приложения.\nЭто довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер простого - не так сложно.',
            ],
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "console.log('ВАШ ТЕКСТ')",
        },
        {
            id: '4',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'В нашем случае для отображения нужной фразы пишем такое:',
            ],
        },
        {
            id: '5',
            type: ArticleBlockType.CODE,
            code: "console.log('Hello World!');",
        },
        {
            id: '6',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'Если получилось - поздравляю! Вы теперь JS разработчик)',
            ],
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
