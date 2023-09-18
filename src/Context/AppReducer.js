


export function AppReducer(state, action) {
    switch(action.type) {
        case 'deleteTrans':
            return {
                ...state,
                transaction: state.transaction.filter((item) => item.id !== action.payload)
            }
        case 'addTrans':
            return {
                ...state,
                transaction:[...state.transaction, action.payload]
            }    
        default:
            return state;
    }
}