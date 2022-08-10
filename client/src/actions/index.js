import axios from 'axios';




export function getCountries(){
    return async function(dispatch){
        const dataCountries = await axios('http://localhost:3001/countries');
        // console.log(dataCountries.data);
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: dataCountries.data
        })
    }
};

export function getCountryName(name){

    console.log(name)
    return async function(dispatch){

        try {
            const nameCountry = await axios.get("http://localhost:3001/countries?name="+name);
            console.log(nameCountry)
            return dispatch({
                type: 'GET_BY_NAME',
                payload: nameCountry.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};


export function getCountryDetail(id){

    // console.log(id)
    return async function(dispatch){
        const detailsCountry = await axios(`http://localhost:3001/countries/${id}`);
        // console.log(detailsCountry.data)
        return dispatch({
            type: 'GET_DETAILS',
            payload: detailsCountry.data

        })
    }
};

export function cleanDeteails(){
    return ({
        type: 'CLEAN_DETAILS',
        payload: {}
    })
};

export function filterCountriesByContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
};

export function filterCountriesByActivity(payload){
    return{
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
};

export function filterOrderAlf(payload){
    return{
        type: 'ORDER_ALF',
        payload
    }
};

export function filterPopulation(payload){
    return{
        type: 'ORDER_POB',
        payload
    }
};
export function createActivity(payload){
    return async function(dispatch){
        const activity = axios.post("http://localhost:3001/activities", payload);
        console.log(payload);
        return activity

    }
};

export function getActivities(){
    return async function(dispatch){
        const dataActivities = await axios.get('http://localhost:3001/activities');
        // console.log(dataActivities.data);
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: dataActivities.data
        })
    }
};

export function filterByActivities(payload){
    return{
        type: 'FILTER_BY_ACTIVITIES',
        payload
    }
}