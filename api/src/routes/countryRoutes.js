const { Router } = require('express');
const router = Router();
const { Country, Activity } = require("../db");
require("dotenv").config();
const { Sequelize, Op } = require("sequelize");


router.get('/', async (req, res)=>{

    const { name } = req.query
    console.log(name);
    
    try {
        if(name){
            const countryName = await Country.findAll({
                where: {
                    name : {
                        [Op.iLike]: `%${name}%`,
                    }
                }
            })
            return res.status(200).send(countryName)
        } else {
            const allCountries = await Country.findAll()

            return res.status(200).send(allCountries)
        }
    } catch (error) {
        res.status(400).send(error)
    }
    









//     const getCountries = async ()=>{ 
//     return await Country.findAll({
//         includes:{
//             model: Activity,
//             attributes: ['name'],
//             throuth: {
//                 attributes : []
//             }
//         }
// })};


//     const allCountries = await getCountries();

//     if(!name){
//         return res.status(200).send(allCountries)
//     }else{
//         try {
//             let database = await Country.findAll({
//                 where: {
//                     name: { [Op.iLike]: `%${name}%`}
//                 },
//                 include: {
//                     model: Activity,
//                     attributes: ["name"],
//                     through: {
//                         attributes: []
//                     }
//                 }
//             })
//             console.log("estoy respondiendo bien")
//             console.log(database);
//             return res.send(database);
//         } catch (err) {
//             next(err);
//             console.log(err);
//         }
//     }

});



module.exports = router;
