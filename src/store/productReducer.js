const initialState = {
    loading: true,
    data: [],
    categories:[]
}

let getCategories = (data) =>{
    let categories = []
    data.forEach(element => {
        if(!categories.includes(element.category)){
            categories.push(element.category)
        }
    })
    return categories;
}

export const productReducer = (state = initialState, action) => {
switch(action.type){
    case 'SET_DATA':
        return{...state, loading: false, data: action.payload}
    case 'GET_CATEGORIES':
        return{...state, categories: getCategories(action.payload)}
    default:
        return state
}
}