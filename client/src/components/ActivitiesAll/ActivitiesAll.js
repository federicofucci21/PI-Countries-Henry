import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, deleteActivity } from "../../actions/activityActions";
import { filterActivities } from "../../actions/activityActions";
import style from "./ActivityAllStyle.module.css";

export default function ActivitiesAll() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const filteredActivities = useSelector((state) => state.filteredActivities);
  const allActivities = useSelector((state) => state.allActivities);

  function handleFilterByActivitie(e) {
    e.preventDefault();
    dispatch(filterActivities(e.target.value));
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteActivity(e.target.value));
    dispatch(getActivities());
    console.log("Activity Deleted");
  }

  return (
    <div className={style.main}>
      <div className={style.header}>
        {/* BOTON PARA REGRESAR A HOME */}
        <Link to="/home">
          <button className={style.btnHeader}>Home</button>
        </Link>
        {/* BOTON PARA CREAR ACTIVIDAD */}
        <Link to="/activities">
          <button className={style.btnHeader}>Crea tu Actividad</button>
        </Link>
        {/* FILTRO POR ACTIVIDAD */}
        <div className={style.divSelect}>
          <label>Activities</label>
          <select
            className={style.btnHeader}
            placeholder="Activities"
            onChange={(e) => {
              handleFilterByActivitie(e);
            }}
          >
            <option id="allActivities" value="all">
              All
            </option>
            {allActivities.map((e) => (
              <option value={e.name} id={e.id}>
                {e.name.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <h5 className={style.difLevel}>
          * - 1(Muy facil) 2(facil) 3(Medio) 4(Dificil) 5(Muy Dificil)
        </h5>
      </div>
      <div className={style.divCards}>
        {filteredActivities?.map((e) => {
          return (
            <section className={style.activityCard}>
              <button value={e.id} onClick={handleDelete}>
                x
              </button>
              <div className={style.divAct}>
                <ActivityCard
                  name={e.name.toUpperCase()}
                  difficulty={e.difficulty}
                  duration={e.duration}
                  season={e.season}
                  population={e.population + " hab."}
                />
              </div>
              <section className={style.countriesSection}>
                <div>PAISES</div>
                {e.countries?.map((e) => {
                  return (
                    <div className={style.divCountries}>
                      {
                        <ul>
                          <li className={style.li}>
                            <Link
                              className={style.btnCountries}
                              to={`/countries/${e.id}`}
                            >
                              {e.name}
                            </Link>
                          </li>
                        </ul>
                      }
                    </div>
                  );
                })}
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
}
