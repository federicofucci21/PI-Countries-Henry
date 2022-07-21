import axios from 'axios';


export function getCountries(){
    return async function(dispatch){
        const dataCountries = await axios('http://localhost:3001/countries');
        console.log(dataCountries.data);
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: dataCountries.data
        })
    }
};

export function getCountryDetail(id){
    return async function(dispatch){
        const detailsCountry = await axios(`'http://localhost:3001/countries/${id}`);

        return dispatch({
            type: 'GET_DETAILS',
            payload: detailsCountry
        })
    }
};

