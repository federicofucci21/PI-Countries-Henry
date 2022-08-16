import {
    GET_COUNTRIES,
    GET_BY_NAME,
    GET_DETAILS,
    CLEAN_DETAILS,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    ORDER_ALF,
    ORDER_POB
} from '../actions/countryActions'

import {
    GET_ACTIVITIES,
    FILTER_ACTIVITIES
} from '../actions/activityActions'

import { filterByContinents, filterByAcrivities, orderAlf, orderByPopulation, filterActivities} from './auxi';

const initialState = {
    countries: [],
    allCountries: [],
    countryDetails: {},
    allActivities: []
};

function rootReducer (state=initialState, action){

    switch(action.type){
        case GET_COUNTRIES:
            // console.log(action.payload)
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };
        case GET_BY_NAME:
                        // console.log(action.payload)
            return {
                ...state,
                countries: action.payload
            };


        case GET_DETAILS:
            return{
                ...state,
                countryDetails: action.payload
            };

        case CLEAN_DETAILS:
                return{
                    ...state,
                    countryDetails: action.payload
                }

        case FILTER_BY_CONTINENT:
            return{
                ...state,
                countries: filterByContinents(state.allCountries, action.payload)
            }

        case FILTER_BY_ACTIVITY:
            return {
                ...state,
                countries: filterByAcrivities(state.allCountries, state.allActivities, action.payload)
            }
            
        case ORDER_ALF:
            return{
                ...state,
                countries: orderAlf(state.countries, action.payload)
            };

        case ORDER_POB:
                return{
                    ...state,
                    countries: orderByPopulation(state.countries, action.payload)
                };

        case GET_ACTIVITIES:
            // console.log(action.payload)
            return{
                ...state,
                allActivities: action.payload,
                filteredActivities: action.payload
            };

        case FILTER_ACTIVITIES:
            return{
                ...state,
                filteredActivities: filterActivities(state.allActivities, action.payload)
            }

        default: return state
    };
};

export default rootReducer;