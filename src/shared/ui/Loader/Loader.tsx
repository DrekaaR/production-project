import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string,
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('page-loader__body', {}, [className])}>
        <div className="page-loader__item">
            <div />
        </div>
    </div>
);
