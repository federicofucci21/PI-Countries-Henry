import axios from "axios";
export const GET_COUNTRIES = 'GET_COUNTRIES'

export function getCountries(){
    return async function(dispatch){
        const dataCountries = await axios('http://localhost:3001/countries');
        // console.log(dataCountries.data);
        return dispatch({
            type: GET_COUNTRIES,
            payload: dataCountries.data
        })
    }
};