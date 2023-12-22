import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/modal/types/article';
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
    title: 'JS news',
    subtitle: 'Whats new in js while 2022',
    img: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg',
    views: 1022,
    createdAt: '27.09.2023',
    tags: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'JavaScript is a programming language!',
                'According to some studies, by the way, it is the most popular. And certainly one of the easiest to get into IT.',
                'In general, web development is, in my opinion, a very welcoming place for beginners and offers a multitude of opportunities. So rejoice, dear young developers from around the world who are reading this article right now.',
                'In many ways, the language is popular due to the development of the web. After all, it monopolized the browser and is, with rare exceptions, the only language capable of creating animations and validating forms, implementing almost any complex logic on the client side (in the browser).',
                "The modern web is not just simple websites and online stores from the 2000s, but mostly complex and interesting web applications. In addition to client-side logic, JavaScript is also popular on the server. And its popularity there is growing year by year. Furthermore, JavaScript allows you to write mobile applications and even ventures a bit into desktop applications.\nIn short, it's one language with many possibilities.",
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.TEXT,
            title: "Let's go (Hello world)\n",
            paragraphs: [
                "In the world of IT, it's widely accepted to begin learning anything with a \"hello world\" application. It's a pretty good practice. The most challenging part of learning something new is to start, and starting with something super simple is not that difficult.",
                "I've prepared a mini-project for you in CodeSandbox. That's where we'll be working:",
            ],
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ')console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ');",
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
            title: 'Example 1',
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
