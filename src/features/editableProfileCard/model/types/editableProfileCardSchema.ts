import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../const/const';

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
