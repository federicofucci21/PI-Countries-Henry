import React from "react";
import style from "./activityCardStyle.module.css";

export default function ActivityCard({
  name,
  difficulty,
  duration,
  season
}) {
  // console.log(difficulty)
  return (
    <div className={style.activityCard}>
      <div>{name}</div>
      <section>
        <h5>Nivel de Dificultad: {difficulty}</h5>
        <h5>{duration} horas</h5>
        <h5>{season}</h5>
      </section>
    </div>
  );
}
