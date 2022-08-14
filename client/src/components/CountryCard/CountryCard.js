import React from "react";
import { Link } from "react-router-dom";
import style from "./CountryCardStyle.module.css";

export default function CountryCard({ id, flag, name, region, population }) {
  return (
    <div className={style.card}>
      <img className={style.imgstyle} src={flag} alt="Flag not Found" />
      <section className={style.section}>
        <div className="divName">
          <h2 className={style.name}>{name}</h2>
        </div>
        <div className={style.divInfo}>
          <h5 className={style.region}>{region}</h5>
          <h5 className={style.population}>{population}</h5>
        </div>
        <Link to={`/countries/${id}`}>
          <button className={style.link}>Saber más</button>
        </Link>
      </section>
    </div>
  );
}
