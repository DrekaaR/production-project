import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
    FILLED = 'filled',
    FILLED_RED = 'filled-red'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize,
    isLoading?: boolean,
    children?: ReactNode,
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.FILLED,
        square,
        size = ButtonSize.M,
        isLoading,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.loading]: isLoading,
    };

    return (
        <button
            type="button"
            disabled={isLoading}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {isLoading ? <Loader small /> : children}
        </button>
    );
});
