const INITIAL_STATE = {
    count: 0,
}

function CounterReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1,
            }
        }
    }
    return state;
}

export default CounterReducer;