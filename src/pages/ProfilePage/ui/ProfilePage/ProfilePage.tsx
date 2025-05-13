import clsx from 'clsx';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={clsx(className)}>
            <div className={cls.profile}>
                <EditableProfileCard id={id} />
            </div>
        </Page>
    );
};

export default ProfilePage;
