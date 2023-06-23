import React, {
    InputHTMLAttributes, memo, useEffect, useRef, 
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { v4 as uuidv4 } from 'uuid';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    label?: string;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {label && (
                <label htmlFor={uuidv4()} className={cls.label}>
                    {label}
                </label>
            )}
            <input
                ref={ref}
                className={cls.input}
                id={label && uuidv4()}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
