import {UseReducerCounter} from './UseReducerCounter';
import {useReducer} from 'react'

const initialState = {count: 0};

const CounterForm = (props) => {

    // Utilisation du reducer
    const [state, dispatch] = useReducer(UseReducerCounter, initialState);


    const onClickIncrementHandler = () => {
        dispatch({type: 'increment'})
    }

    const onClickDecrementHandler = (e) => {
        //e.PreventCLick()
        dispatch({type: 'decrement'})
    }

    // Return la vue
    return (
        <>
        <p>Counter: {state.count}</p>
        <button onClick={onClickIncrementHandler}>Incrément</button>
        <button onClick={onClickDecrementHandler}>Decrément</button>
        
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
};

export default CounterForm;