export { UserRole } from './model/const/constUser';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export {
    isUserAdmin,
    isUserManager,
    getUserRole,
} from './model/selectors/roleSelector';

export type {
    User,
    UserSchema,
} from './model/types/user';
