import { Country } from 'entities/Country';
import { ConstCurrency } from 'entities/Currency';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number | '';
    currency?: ConstCurrency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
