import axios from 'axios';


export function getCountries(){
    return async function(dispatch){
        const dataCountries = await axios('http://localhost:3001/countries');

        return dispatch({
            type: 'GET_COUNTRIES',
            payload: dataCountries
        })
    }
};

