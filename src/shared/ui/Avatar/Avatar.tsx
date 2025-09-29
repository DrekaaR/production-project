import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar = memo(({ className, src, size }: AvatarProps) => {
    const { t } = useTranslation();

    const styles = useMemo(() => ({
        width: size,
        height: size,
        flexBasis: size,
    }), [size]);

    return (
        <div style={styles} className={classNames(cls.Avatar, {}, [className])}>
            <img src={src} alt={t('user avatar')} />
        </div>
    );
});
