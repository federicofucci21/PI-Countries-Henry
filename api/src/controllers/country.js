const { Router } = require('express');
const router = Router();
const { Country, Activity } = require("../db");
require("dotenv").config();

const { Sequelize, Op } = require("sequelize");
const axios = require("axios");



const updateTotal = async ()=>{

const dataApi = await axios.get('https://restcountries.com/v3/all');
console.log('dataapi', dataApi)

const dataModel = await dataApi.data.map( e =>{
    return {
        id: e.cca3,
        name: e.name.common,
        flag: e.flags[1],
        region: e.region,
        capital: e.capital ? e.capital[0] : 'capital inexistente',
        subregion: e.subregion? e.subregion : 'subregion inexistente',
        area: e.area,
        population: e.population
    }
});
//solucionar capital que es una array y no me trae la info
// console.log(dataModel[1])


dataModel.forEach( async (e)=>{
    await Country.findOrCreate(
        {where:{
        id: e.id,
        name: e.name,
        flag: e.flag,
        region: e.region,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population
    }})
} );


};

module.exports = updateTotal