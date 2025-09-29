import { Country } from '@/entities/Country';
import { ConstCurrency } from '@/entities/Currency';
import { ValidateProfileError } from '../../const/const';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Alex',
    lastname: 'Troshin',
    country: Country.Russia,
    currency: ConstCurrency.RUB,
    username: 'Alex2t',
    age: 27,
    city: 'Ufa',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('without city', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
});
