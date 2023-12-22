import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

const data = {
    id: '1',
    title: 'JS news',
    subtitle: 'Whats new in js while 2022',
    img: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg',
    views: 1022,
    createdAt: '27.09.2023',
    tags: ['IT'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
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
            type: 'TEXT',
            title: "Let's go (Hello world)",
            paragraphs: [
                "In the world of IT, it's widely accepted to begin learning anything with a \"hello world\" application. It's a pretty good practice. The most challenging part of learning something new is to start, and starting with something super simple is not that difficult.",
                "I've prepared a mini-project for you in CodeSandbox. That's where we'll be working:",
            ],
        },
        {
            id: '3',
            type: 'CODE',
            code: "console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ')console.log('ВАШ ТЕКСТ') console.log('ВАШ ТЕКСТ');",
        },
        {
            id: '4',
            type: 'TEXT',
            paragraphs: [
                'В нашем случае для отображения нужной фразы пишем такое:',
            ],
        },
        {
            id: '5',
            type: 'CODE',
            code: "console.log('Hello World!');",
        },
        {
            id: '6',
            type: 'IMAGE',
            src: 'https://habrastorage.org/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
            title: 'Example 1',
        },
        {
            id: '7',
            type: 'TEXT',
            paragraphs: [
                'Если получилось - поздравляю! Вы теперь JS разработчик)',
            ],
        },
    ],
};

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('');

        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
