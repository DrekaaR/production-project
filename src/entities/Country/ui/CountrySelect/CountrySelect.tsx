import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.France, content: Country.France },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Japan, content: Country.Japan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.UnitedStates, content: Country.UnitedStates },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const onChangeHandler = useCallback((selectedValue: string) => {
        onChange?.(selectedValue as Country);
    }, [onChange]);

    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            // label={t('Select country')}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
