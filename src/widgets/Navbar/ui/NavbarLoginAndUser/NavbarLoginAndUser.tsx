import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { AvatarDropdown } from 'features/avatarDropdown';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NavbarLoginAndUser.module.scss';

interface NavbarLoginAndUserProps {
    className?: string;
}

export const NavbarLoginAndUser = memo(({ className }: NavbarLoginAndUserProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return <AvatarDropdown />;
    }

    return (
        <div className={cls.NavbarLoginAndUser}>
            <Button
                className={cls.loginButton}
                theme={ButtonTheme.CLEAR}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
});
