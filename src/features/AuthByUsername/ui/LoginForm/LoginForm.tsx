import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                label={t('Login')}
                value={loginValue}
                onChange={setLoginValue}
            />
            <Input
                type="password"
                label={t('Password')}
                value={passwordValue}
                onChange={setPasswordValue}
            />
            <Button theme={ButtonTheme.FILLED} className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
