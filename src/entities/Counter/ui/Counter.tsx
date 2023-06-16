import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {t('Counter Value')}
                :
                {counterValue}
            </h1>
            <button type="button" data-testid="increment-btn" onClick={increment}>
                {t('increment')}
            </button>
            <button type="button" data-testid="decrement-btn" onClick={decrement}>
                {t('decrement')}
            </button>
        </div>
    );
};
