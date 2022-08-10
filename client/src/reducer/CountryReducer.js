import { GET_COUNTRIES } from "../actions/countriesAction";


const initialState = {
    countries: [],
    allCountries: [],
    countryDetails: {},
};

function countryReducer (state=initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            // console.log(action.payload)
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };
        

        default: return state
    }
}