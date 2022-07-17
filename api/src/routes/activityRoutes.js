const { Router } = require('express');
const router = Router();
const { Activity } = require("../db");
require("dotenv").config();
const { Sequelize } = require("sequelize");

router.post("/", async (req, res, next) => {
    // const { id, name, difficulty, duration, season, countries } = req.body;
    // try {
    //     let activ = await Activity.create({id, name, difficulty, duration, season});
    //     console.log(activ);
    //     await activ.setCountries(countries)
    // } catch (error) {
    //     next(error);
    // }
    const activity = req.body;
    console.log(req.body);
    try {
        let [act, created] = await Activity.findOrCreate({
            where: {
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season,
            }
        })
        console.log(created);
        await act.setCountries(activity.countries)
        return res.json(act);
    } catch (err) {
        next(err);
    }
})

module.exports = router;