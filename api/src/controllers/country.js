const { Country } = require("../db");
require("dotenv").config();
const axios = require("axios");

const updateTotal = async () => {
  const dataApi = await axios.get("https://restcountries.com/v3/all");

  const dataModel = await dataApi.data.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      flag: e.flags[1],
      region: e.region,
      capital: e.capital ? e.capital[0] : "capital not found", //Some countries don't have capital
      subregion: e.subregion ? e.subregion : "subregion not found", //Some countries don't have subregion
      area: e.area,
      population: e.population,
    };
  });

  dataModel.forEach(async (e) => {
    await Country.findOrCreate({
      where: {
        id: e.id,
        name: e.name,
        flag: e.flag,
        region: e.region,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      },
    });
  });
};

module.exports = updateTotal;
