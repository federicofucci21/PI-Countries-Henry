const { Router } = require('express');
const router = Router();
const { Country, Activity } = require("../db");
require("dotenv").config();
const { Sequelize, Op } = require("sequelize");

//GET all Countries, and by name.

router.get('/', async (req, res)=>{

    const { name } = req.query
    // console.log(name);
    
    try {
        
        if(name){
            const countryName = await Country.findAll({
                where: {
                    name : {
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            // console.log('routes', countryName);
            return countryName.length?
            res.status(200).send(countryName)
            :res.status(404).send('Country Not Found')
        } else {
            const allCountries = await Country.findAll()

            return res.status(200).send(allCountries)
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
});

//Get Country by ID (pk)

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    // console.log(id);
    if(id){
    try {
            const countryId = await Country.findByPk(id,
                {
                include:{
                    model: Activity,
                    attributes: ['id', 'name', 'difficulty', 'duration', 'season']
                }
            })
            return countryId?
            res.status(200).json(countryId)
            :res.status(404).send('Country Not Found')
        
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}
})





module.exports = router;


