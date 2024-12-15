import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <div className={cls.image}>
                <img src={block.src} alt={block.title} />
            </div>
            {block.title && (
                <div className={cls.title}>
                    <span>{block.title}</span>
                </div>
            )}
        </div>
    );
});
