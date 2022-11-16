import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_ALF = "ORDER_ALF";
export const ORDER_POB = "ORDER_POB";
export const ORDER_AREA = "ORDER_AREA";

export function getCountries() {
  return async function (dispatch) {
    const dataCountries = await axios("http://localhost:3001/countries");
    return dispatch({
      type: GET_COUNTRIES,
      payload: dataCountries.data,
    });
  };
}

export function getCountryName(name) {
  return async function (dispatch) {
    try {
      const nameCountry = await axios.get(
        "http://localhost:3001/countries?name=" + name
      );
      return dispatch({
        type: GET_BY_NAME,
        payload: nameCountry.data,
      });
    } catch (error) {
      console.log(error);
      alert("Country not Found");
    }
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    const detailsCountry = await axios(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: GET_DETAILS,
      payload: detailsCountry.data,
    });
  };
}

export function cleanDeteails() {
  return {
    type: CLEAN_DETAILS,
    payload: {},
  };
}

export function filterCountriesByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

export function filterCountriesByActivity(payload) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
}

export function filterOrderAlf(payload) {
  return {
    type: ORDER_ALF,
    payload,
  };
}

export function filterPopulation(payload) {
  return {
    type: ORDER_POB,
    payload,
  };
}

export function filterArea(payload) {
  return {
    type: ORDER_AREA,
    payload,
  };
}
