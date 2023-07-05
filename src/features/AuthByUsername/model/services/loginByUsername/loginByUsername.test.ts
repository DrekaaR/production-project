import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: 'user', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: 'user', password: '123' });

        // Проверяем что вызвался нужный action и что он принимает аргументом нужные данные
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // При успешном логине dispatch вызывается 3 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // Проверка вызвалась ли вообще функция
        expect(thunk.api.post).toHaveBeenCalled();
        // Проверяем статус запроса
        expect(result.meta.requestStatus).toEqual('fulfilled');
        // Проверяем что находится в payload
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'user', password: '123' });

        // Проверка вызвалась ли вообще функция
        expect(thunk.api.post).toHaveBeenCalled();
        // При ошибке dispatch вызывается 2 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        // Проверяем статус запроса
        expect(result.meta.requestStatus).toEqual('rejected');
        // Проверяем что находится в payload
        // expect(result.payload).toEqual(string);
    });
});
