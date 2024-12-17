import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const onChangeHandler = useCallback((selectedValue: string) => {
        onChange?.(selectedValue as Currency);
    }, [onChange]);

    return (
        <ListBox
            value={value}
            onChange={onChangeHandler}
            items={options}
            disabled={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
