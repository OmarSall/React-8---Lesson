import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decreaseByAmount, increaseByAmount} from '../store/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const [amountToChange, setAmountToChange] = useState(0);

    const counter = useSelector((state) => {
        return state.counter.value;
    })

    const handleInputChange = (event) => {
        setAmountToChange(event.target.valueAsNumber);
    }

    const handleIncrease = () => {
        dispatch(increaseByAmount({
            amount: amountToChange
        }));
    }

    const handleDecrease = () => {
        dispatch(decreaseByAmount({
            amount: amountToChange
        }));
    }

    return (
        <div>
            <input value={amountToChange}
                   type="number"
                   onChange={handleInputChange}
            />
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <p>Counter: {counter}</p>
        </div>
    )
}