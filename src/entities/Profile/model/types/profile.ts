import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number | '';
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}