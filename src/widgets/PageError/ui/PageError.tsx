import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <VStack
            max
            gap="16"
            justify="center"
            className={classNames(cls.PageError, {}, [className])}
        >
            <p>{t('An unexpected error has occurred')}</p>
            <button onClick={reloadPage} type="button">
                {t('Reload')}
            </button>
        </VStack>
    );
});
