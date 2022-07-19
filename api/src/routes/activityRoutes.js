const { Router } = require('express');
const router = Router();
const { Activity } = require("../db");
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
                duration: Number(activity.duration),
                season: activity.season,
            }
        })
        console.log(created);
        await row.addCountries(activity.countries) //countries trae el ID del pais
        return res.status(200).json(row);
    } catch (err) {
        console.log(err)
        res.status(404).send(err);
    }
})

module.exports = router;