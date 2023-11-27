import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { v4 as uuidv4 } from 'uuid';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    label?: string;
    autoFocus?: boolean;
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'digital') {
            const numberRegex = /^[0-9]+$/;
            if (numberRegex.test(e.target.value)) {
                onChange?.(e.target.value);
            }
        } else {
            onChange?.(e.target.value);
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Input, mods, [className])}>
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
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
