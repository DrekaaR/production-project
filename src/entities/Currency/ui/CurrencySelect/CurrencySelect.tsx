import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { ConstCurrency } from '../../model/const/constCurrency';

interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: ConstCurrency) => void;
    readonly?: boolean;
}

const options = [
    { value: ConstCurrency.RUB, content: ConstCurrency.RUB },
    { value: ConstCurrency.EUR, content: ConstCurrency.EUR },
    { value: ConstCurrency.USD, content: ConstCurrency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const onChangeHandler = useCallback((selectedValue: string) => {
        onChange?.(selectedValue as ConstCurrency);
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
