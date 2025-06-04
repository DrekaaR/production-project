import { ArticleView } from 'entities/Article';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TilesIcon from 'shared/assets/icons/tiles.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        Icon: TilesIcon,
    },
    {
        view: ArticleView.BIG,
        Icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', { [cls.selected]: view === viewType.view })}
                >
                    <viewType.Icon />
                </Button>
            ))}
        </div>
    );
});
