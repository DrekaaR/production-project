import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string,
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <form className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && <Text text={t('Wrong data')} theme={TextTheme.ERROR} />}
                <Input
                    autoFocus
                    label={t('Login')}
                    value={username}
                    onChange={onChangeUsername}
                />
                <Input
                    type="password"
                    label={t('Password')}
                    value={password}
                    onChange={onChangePassword}
                />
                <Button
                    type="submit"
                    isLoading={isLoading}
                    onClick={onLoginClick}
                    theme={ButtonTheme.FILLED}
                    className={cls.loginBtn}
                >
                    {t('Login')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
