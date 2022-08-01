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
                        [Op.iLike]: `${name}`
                    }
                }
            })
            console.log(countryName);
            return res.status(200).send(countryName)
        } else {
            const allCountries = await Country.findAll()

            return res.status(200).send(allCountries)
        }
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/:id', async (req, res)=>{

    const { id } = req.params;
    // console.log(id);
    if(id){
    try {
        
            const countryId = await Country.findOne({
                where: {id: { [Op.like]: `%${id}%`}},
                include:{
                    model: Activity,
                    attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
                    througth : {
                        attributes: []
                    }
                }
            })
            res.status(200).json(countryId)
        
    } catch (error) {
        res.status(404).send(error)
    }
}
})





module.exports = router;


