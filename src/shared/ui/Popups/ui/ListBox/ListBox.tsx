import {
    Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions, 
} from '@headlessui/react';
import clsx from 'clsx';
import { memo, ReactNode } from 'react';
import CheckIcon from 'shared/assets/icons/check.svg';
import ArrowIcon from 'shared/assets/icons/chevron.svg';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className, items, value, placeholder, onChange, disabled,
    } = props;

    return (
        <HListBox
            as="div"
            className={clsx(cls.ListBox, className)}
            value={value}
            onChange={onChange}
            disabled={disabled}
        >
            <ListboxButton className={cls.trigger}>
                <span>{value ?? placeholder}</span>
                <ArrowIcon className={cls.arrow} />
            </ListboxButton>
            <ListboxOptions as="ul" className={cls.options}>
                {items?.map((item) => (
                    <ListboxOption
                        as="li"
                        disabled={item.disabled}
                        key={item.value}
                        value={item.value}
                        className={cls.item}
                    >
                        {({ selected }) => (
                            <>
                                {item.content}
                                {selected && <CheckIcon fontSize={10} />}
                            </>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HListBox>
    );
});
