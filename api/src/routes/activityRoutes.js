const { Router } = require("express");
const router = Router();
const { Activity } = require("../db");
const { Country } = require("../db");
require("dotenv").config();

router.post("/", async (req, res) => {
  const activity = req.body;
  try {
    //Some validations ...
    if (
      !activity.name ||
      !activity.difficulty ||
      !activity.duration ||
      !activity.season ||
      !activity.countries
    ) {
      return res.status(404).send("Missing obligatory data");
    }
    if (!activity.countries.length) {
      return res.status(404).send("At least one Country is required");
    }
    if (
      activity.difficulty < 1 ||
      activity.difficulty > 5 ||
      activity.duration < 1 ||
      activity.duration > 24
    ) {
      return res.status(404).send("Range must be respected");
    }

    let [row, created] = await Activity.findOrCreate({
      where: {
        name: activity.name,
        difficulty: activity.difficulty,
        duration: activity.duration,
        season: activity.season,
      },
    });
    console.log("created", created);

    const match = await Country.findAll({
      where: {
        name: activity.countries,
      },
    });

    await row.addCountries(match);
    return !created
      ? res.status(404).send(`${activity.name} already exist`)
      : res.status(200).json(row);
  } catch (err) {
    console.log(err.message);
    res.status(404).json(err.message);
  }
});

//GEt all activities from Db

router.get("/", async (req, res) => {
  try {
    const allActivities = await Activity.findAll({
      include: Country,
    });
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  try {
    await Activity.destroy({
      where: {
        id,
      },
    });
    return res.status(200).send("actividad eliminada");
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;

// router.update('/:id', async(req, res)=>{
//   let { id }= req.params;
//   console.log(id);
//   try {
//     const activity = await Activity.findByPk(id);

//     activity.set({
//             name: activity.name,
//             difficulty: activity.difficulty,
//             duration: activity.duration,
//             season: activity.season,
//     });

//     await activity.save();

//       return res.status(200).send('actividad eliminada')

//   } catch (error) {
//       return console.log(error)
//   }
// })
