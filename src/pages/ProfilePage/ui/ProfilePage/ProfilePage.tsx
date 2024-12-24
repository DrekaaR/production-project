import clsx from 'clsx';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text theme={TextTheme.ERROR} text={t('No profile found')} />;
    }

    return (
        <Page className={clsx(className)}>
            <div className={cls.profile}>
                <EditableProfileCard id={id} />
            </div>
        </Page>
    );
};

export default ProfilePage;
