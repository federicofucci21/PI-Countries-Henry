import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import style from '../Css Modules/CountryCardsStyle.module.css'


export default function CountryCards({ currentCountries }){
    // console.log(currentCountries)

    return(
        <div className={style.main}>
        {
            
            currentCountries?.map((e)=>{
                return (
                <CountryCard
                key={e.id}
                id={e.id}
                flag={e.flag} 
                name={e.name} 
                region={e.region}
                population={e.population + ' hab.'}/>
                )})
        }
        </div>
    )
}