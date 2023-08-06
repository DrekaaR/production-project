import {
    CombinedState, configureStore, Reducer, ReducersMapObject, 
} from '@reduxjs/toolkit';
import { To } from '@remix-run/router';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { userReducer } from 'entities/User';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        // Need to get rid of "as"
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
