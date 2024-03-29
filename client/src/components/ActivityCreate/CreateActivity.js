import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions/countryActions";
import { createActivity } from "../../actions/activityActions";
import { Link, useHistory } from "react-router-dom";
import style from "./CreateActivityStyle.module.css";
import { validate } from "../Auxiliar/Auxiliar";


// function validate(input) {
//   let errors = {};
//   if (!input.name) {
//     errors.name = "Name is require";
//   } else if (input.difficulty > 5 || input.difficulty < 1) {
//     errors.difficulty = "Difficulty must be from 1 to 5";
//   } else if (!input.difficulty) {
//     errors.difficulty = "Difficulty is require";
//   } else if (!input.duration) {
//     errors.duration = "Duration is require";
//   } else if (!input.season) {
//     errors.season = "Season is require";
//   } else if (input.season === "") {
//     errors.season = "Season is require";
//   }
//   return errors;
// }

export default function CreateActivity(props) {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  allCountries.sort((a, b) => (a.name < b.name ? -1 : +(a.name > b.name)));
  const history = useHistory();
  const [errors, setErrors] = useState({});


  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
    id: ''
  });
  // console.log(input)
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleInputChange(e) {
    e.preventDefault(e);
    setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.difficulty === 0 ||
      input.duration === 0 ||
      !input.season ||
      !input.countries.length
    ) {
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    } else {
      dispatch(createActivity(input));
      setInput({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        id: ''
      });
      console.log("Activity Created");
      history.push("/home");
    }
  }

  function handleSelect(e) {
    // console.log(input.countries);
    // console.log(e.target.value);
    let uniqName = input.countries.find((c) => c === e.target.value);
    if (!uniqName) {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }
  }

  function removeCountry(e) {
    // console.log('buton x', e.target.value)
    e.preventDefault();
    let array = input.countries.filter((el) => el !== e.target.value);
    setInput({
      ...input,
      countries: array,
    });
  }

  return (
    <div className={style.create}>
      <header>
        <div className={style.header}>
          <Link to="/home">
            <button className={style.btnHeader}>Volver</button>
          </Link>
        </div>
      </header>

      <main>
        <div className={style.divform}>
          <form
            className={style.form}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className={style.name}>
              <label>Name: </label>
              <input
                className={style.input}
                placeholder="Activity name"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={input.name}
              />
              {errors.name && <p className={style.errors}>{errors.name}</p>}
            </div>

            <div className={style.difficulty}>
              <label>Difficulty: </label>
              <select
                className={style.select}
                placeholder="Difficulty"
                name="difficulty"
                // value={input.season}
                onChange={handleInputChange}
              >
                <option>--Difficulty--</option>
                <option value="1">1-(Muy Facil)</option>
                <option value="2">2-(Facil)</option>
                <option value="3">3-(Medio)</option>
                <option value="4">4-(Dificil)</option>
                <option value="5">5-(Muy Dificil)</option>
              </select>
              {errors.difficulty && (
                <p className={style.errors}>{errors.difficulty}</p>
              )}
            </div>

            <div className={style.duration}>
              <label>Duration: </label>
              <input
                className={style.input}
                type="number"
                name="duration"
                min="1"
                max="24"
                onChange={handleInputChange}
                value={input.duration}
              ></input>
              {errors.duration && (
                <p className={style.errors}>{errors.duration}</p>
              )}
            </div>
            <div className={style.season}>
              <label>Season: </label>
              <select
                className={style.select}
                placeholder="Season"
                name="season"
                // value={input.season}
                onChange={handleInputChange}
              >
                <option>--Season--</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </select>

              {errors.season && <p className={style.errors}>{errors.season}</p>}
            </div>

            <div className={style.countries}>
              <label>Countries: </label>
              <select
                className={style.select}
                // multiple="true"
                onChange={handleSelect}
              >
                <option>--Countries--</option>
                {allCountries.map((e) => (
                  <option value={e.name}>{e.name}</option>
                ))}
              </select>
              <ul>
                {input.countries.map((e) => (
                  <li className={style.countriesLi}>
                    <div className={style.countriesDiv}>
                    <span className={style.countriesli}>{e}</span>
                    <button className={style.btnDelete}
                      value={e}
                      onClick={(x) => {removeCountry(x);}}
                      >x</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <button className={style.btnForm} type="submit">
              Create Activity
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
