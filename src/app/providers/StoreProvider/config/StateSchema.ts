import { CounterScheme } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterScheme;
    user: UserSchema;
}
