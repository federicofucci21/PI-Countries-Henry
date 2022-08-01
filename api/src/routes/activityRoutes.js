const { Router } = require('express');
const router = Router();
const { Activity } = require("../db");
const { Country } = require ("../db");
require("dotenv").config();
const { Sequelize } = require("sequelize");

router.post("/", async (req, res) => {

    const activity = req.body;
    console.log(req.body);
    try {
        let [row, created] = await Activity.findOrCreate({
            where: {
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season,
            }
        })
        // console.log(row);
        
            const match = await Country.findAll({
                where:{
                    name: activity.countries
                } 
            })
            // console.log(match)
        
        await row.addCountries(match) //countries trae el name del pais
        return res.status(200).json(row);
    } catch (err) {
        console.log(err)
        res.status(404).send(err);
    }
})

router.get('/', async (req, res)=>{
    
    try {
        const allActivities = await Activity.findAll({
            include: Country
        });

        console.log(allActivities.name)
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;