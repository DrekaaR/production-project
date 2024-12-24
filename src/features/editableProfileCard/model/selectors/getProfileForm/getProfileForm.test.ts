import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should with filled state', () => {
        const formData = {
            first: 'Alex',
            lastname: 'Troshin',
            country: Country.Russia,
            currency: Currency.RUB,
            username: 'Alex2t',
            age: 27,
            city: 'Ufa',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(formData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
