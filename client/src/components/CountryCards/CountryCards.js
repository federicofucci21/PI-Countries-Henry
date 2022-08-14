import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import style from "./CountryCardsStyle.module.css";

export default function CountryCards({ currentCountries }) {
  // console.log(currentCountries)

  return (
    <div className={style.main}>
      {!currentCountries.length
        ? "Loading..."
        : currentCountries.map((e) => {
            return (
              <CountryCard
                key={e.id}
                id={e.id}
                flag={e.flag}
                name={e.name}
                region={e.region}
                population={e.population + " hab."}
              />
            );
          })}
    </div>
  );
}
