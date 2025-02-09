import clsx from 'clsx';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack justify="between" className={clsx([className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <HStack gap="12">
                    {readonly ? (
                        <Button
                            data-testid="EditableProfileCardHeader.EditButton"
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                data-testid="EditableProfileCardHeader.SaveButton"
                                onClick={onSave}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Save')}
                            </Button>
                            <Button
                                data-testid="EditableProfileCardHeader.CancelButton"
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Cancel')}
                            </Button>
                        </>
                    )}
                </HStack>
            )}
        </HStack>
    );
});
