import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Flex } from 'shared/ui/Stack';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading: boolean | undefined;
    error: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <Flex center className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex center className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Profile card error occurs while loading')}
                    text={t('Something went wrong')}
                />
            </Flex>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Avatar className={cls.avatar} src={data?.avatar} />
                <div className={cls.form}>
                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('Name')}</div>
                        <Input
                            value={data?.first}
                            placeholder={t('Name')}
                            className={cls.input}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />
                    </div>

                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('Last name')}</div>
                        <Input
                            value={data?.lastname}
                            placeholder={t('Last name')}
                            className={cls.input}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid="ProfileCard.lastname"
                        />
                    </div>

                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('Age')}</div>
                        <Input
                            value={data?.age}
                            type="digital"
                            placeholder={t('Age')}
                            className={cls.input}
                            onChange={onChangeAge}
                            readonly={readonly}
                        />
                    </div>

                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('City')}</div>
                        <Input
                            value={data?.city}
                            placeholder={t('City')}
                            className={cls.input}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </div>

                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('Username')}</div>
                        <Input
                            value={data?.username}
                            placeholder={t('Username')}
                            className={cls.input}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                    </div>

                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('Avatar link')}</div>
                        <Input
                            value={data?.avatar}
                            placeholder={t('Avatar link')}
                            className={cls.input}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                    </div>

                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('Currency')}</div>
                        <CurrencySelect
                            onChange={onChangeCurrency}
                            value={data?.currency}
                            readonly={readonly}
                        />
                    </div>

                    <div className={cls.formItem}>
                        <div className={cls.formLabel}>{t('Country')}</div>
                        <CountrySelect
                            onChange={onChangeCountry}
                            value={data?.country}
                            readonly={readonly}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
