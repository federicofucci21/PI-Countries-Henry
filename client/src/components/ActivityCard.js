import React from 'react';
import { Link } from 'react-router-dom'
import style from '../Css Modules/activityCardStyle.module.css'



export default function ActivityCard({ name, difficulty, duration, season, countries })

{
    // console.log(difficulty)
    return (

            <div className={style.activityCard}>
                <div>{name}</div>
                <section >
                <h5>Nivel de Dificultad: {difficulty} *</h5>
                <h5>{duration} horas</h5>
                <h5>{season}</h5>
                </section>


            </div>

    )

}
