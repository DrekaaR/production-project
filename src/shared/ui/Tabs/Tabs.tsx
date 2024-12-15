import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <HStack max wrap gap="8" className={classNames('', {}, [className])}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    type="button"
                    onClick={clickHandler(tab)}
                    className={classNames(cls.tab, {
                        [cls.selected]: tab.value === value,
                    })}
                >
                    {tab.content}
                </button>
            ))}
        </HStack>
    );
});
