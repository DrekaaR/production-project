import React, {useState} from 'react';
import s from './Countes.module.scss'

export const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1)
    };

    return (
        <div>
            <h1>{value}</h1>
            <button className={s.button} onClick={increment}>increment</button>
        </div>
    );
};