import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string,
    small?: boolean
}

export const Loader = memo(({ className, small }: LoaderProps) => {
    if (small) {
        return (
            <div
                className={classNames('page-loader__item', {}, [className, 'small-loader'])}
            >
                <div />
            </div>
        );
    }

    return (
        <div className={classNames('page-loader__body', {}, [className])}>
            <div className="page-loader__item">
                <div />
            </div>
        </div>
    );
});
