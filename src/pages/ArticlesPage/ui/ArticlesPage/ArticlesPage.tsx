import { Article, ArticleList, ArticleView } from 'entities/Article';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

export const article = {
    id: '1',
    title: 'JavaScript для начинающих. Урок 1',
    img: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg',
    views: 1022,
    user: {
        id: '2',
        username: 'Drekar',
        avatar: 'https://s0.rbk.ru/v6_top_pics/media/img/6/67/756484737186676.jpg',
    },
    createdAt: '27.09.2023',
    tags: [
        'IT', 'SCIENCE', 'ECONOMY',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Вступление',
            paragraphs: [
                'JavaScript - язык программирования!',
                'По некоторым исследованиям, кстати, самый популярный. И уж точно один из самых простых для входа '
                + 'в IT.',
                'В целом, веб-разработка - то место, на мой взгляд, которое весьма лояльно относится к новичкам '
                + 'и дает '
                + 'большое количество возможностей. Так что возрадуйтесь, дорогие молодые разработчики со всего '
                + 'мира, кто '
                + 'сейчас читает эту статью.',
                'Во многом, язык популярен благодаря развитию веба. Ведь он монополизировал браузер и является, за '
                + 'редкими исключениями, единственным языком способным делать анимации и формочки валидировать делать'
                + ' почти сколь угодно сложную логику на клиенте (в браузере)',
                'Современный веб - это не лэндосики и интернет магазины из 2000-х, а, по большей части, достаточно '
                + 'сложные и интересные веб приложения. Помимо клиентской логики JS также популярен на сервере. И там '
                + 'его популярность растет год от года. Еще JS позволяет писать мобильные приложения и '
                + 'даже немного на '
                + 'десктоп замахивается.\nВ общем, язык один, а возможностей много.',
            ],
        },
        {
            id: '2',
            type: 'TEXT',
            title: 'Погнали (Hello world)',
            paragraphs: [
                'Принято в мире IT начинать изучение чего либо с "hello world" приложения.\nЭто довольно таки '
                + 'хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер '
                + 'простого - не так сложно.',
            ],
        },
        {
            id: '3',
            type: 'CODE',
            code: 'console.log(\'ВАШ ТЕКСТ\')',
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
            code: 'console.log(\'Hello World!\');',
        },
        {
            id: '6',
            type: 'IMAGE',
            src: 'https://habrastorage.org/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
        },
        {
            id: '7',
            type: 'TEXT',
            paragraphs: [
                'Если получилось - поздравляю! Вы теперь JS разработчик)',
            ],
        },
    ],
} as Article;

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    // const onViewChange = useCallback(() => {
    //     view === ArticleView.BIG
    //         ? setView(ArticleView.SMALL)
    //         : setView(ArticleView.BIG);
    // }, [view]);

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                articles={
                    new Array(16)
                        .fill(0)
                        .map((item, index) => ({
                            ...article, id: String(index),
                        }))
                }
            />
        </div>
    );
};

export default memo(ArticlesPage);
