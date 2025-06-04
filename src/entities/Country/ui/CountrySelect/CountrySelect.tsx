import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/const/countryConst';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const options = [
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
        <ListBox
            value={value}
            onChange={onChangeHandler}
            // label={t('Select country')}
            items={options}
            disabled={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
