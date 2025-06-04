import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { ConstCurrency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should with filled state', () => {
        const data = {
            first: 'Alex',
            lastname: 'Troshin',
            country: Country.Russia,
            currency: ConstCurrency.RUB,
            username: 'Alex2t',
            age: 27,
            city: 'Ufa',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
