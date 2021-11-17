const action = {count: 0};

export const UseReducerCounter = (state, action) => {

    switch (action.type)
    {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return {count: 0};
    }

    return action;
}