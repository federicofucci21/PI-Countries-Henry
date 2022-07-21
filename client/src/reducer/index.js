
const initialState = {
    countries: [],
    countryDetails: []
};


function rootReducer (state=initialState, action){

    switch(action.type){
        case 'GET_COUNTRIES':
            // console.log(action.payload)
            return{
                ...state,
                countries: action.payload
            };
        case 'GET_DETAILS':
            return{
                ...state,
                countryDetails: action.payload
            }

            
        default: return state
    };
    

};


export default rootReducer;