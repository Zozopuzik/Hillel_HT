const initialState = {
    loading: true,
    data: [],
}

export const emailReducer = (state = initialState, action) => {
switch(action.type){
    case 'SET_EMAILS':
        return{...state, loading: false, data: action.payload}
    default:
        return state
}
}