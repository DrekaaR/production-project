import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
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
        <Select
            value={value}
            onChange={onChangeHandler}
            // label={t('Select currency')}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
