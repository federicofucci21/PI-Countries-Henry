import {
    GET_COUNTRIES,
    GET_BY_NAME,
    GET_DETAILS,
    CLEAN_DETAILS,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    ORDER_ALF,
    ORDER_POB,
    GET_ACTIVITIES,
    FILTER_BY_ACTIVITIES,
} from '../actions/index'

import { filterCountries, filterByAcrivities  } from './auxi';



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
                        console.log(action.payload)
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
                countries: filterCountries(state.allCountries, action.payload)
            }

        case FILTER_BY_ACTIVITY:
            // let activitiesAct = state.allActivities;
            // let countriesAct= action.payload === 'all'?state.allCountries
            // :activitiesAct.filter(e=>e.name===action.payload)[0].countries
            // console.log(countriesAct)
            return {
                ...state,
                countries: filterByAcrivities(state.allCountries, state.allActivities, action.payload)
            }
            
        case ORDER_ALF:
            console.log('stateAct',state.allActivities)
            let countriesOrdered = action.payload === 'asc'?
            state.countries.sort(function(a,b){
                if(a.name>b.name){
                    return 1;
                };
                if(a.name<b.name){
                    return -1;
                }
                return 0
            }):
            state.countries.sort(function(a,b){
                if(a.name<b.name){
                    return 1;
                };
                if(a.name>b.name){
                    return -1;
                }
                return 0
            });
            return{
                ...state,
                countries: countriesOrdered
            };

        case ORDER_POB:
                let countriesPob = action.payload === 'min'?
                state.countries.sort(function(a,b){
                    if(a.population>b.population){
                        return 1;
                    };
                    if(a.population<b.population){
                        return -1;
                    }
                    return 0
                }):
                state.countries.sort(function(a,b){
                    if(a.population<b.population){
                        return 1;
                    };
                    if(a.population>b.population){
                        return -1;
                    }
                    return 0
                });
                return{
                    ...state,
                    countries: countriesPob
                };

        case GET_ACTIVITIES:
            // console.log(action.payload)
            return{
                ...state,
                allActivities: action.payload,
                filteredActivities: action.payload
            };
        case FILTER_BY_ACTIVITIES:
            const allActivities = state.allActivities;
            console.log(allActivities)
            const activitiesFiltered = action.payload === 'all'?allActivities:allActivities.filter(e=>e.name===action.payload)
            return{
                ...state,
                filteredActivities: activitiesFiltered
            }
            
        default: return state
    };
    

};


export default rootReducer;