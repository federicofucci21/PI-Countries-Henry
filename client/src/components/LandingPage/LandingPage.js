import React from 'react';
import { Link } from "react-router-dom";
import style from './LandingPageStyle.module.css'

export default function landingPage (){

    return( 
        <div className={style.land}>
            <div className={style.land_title}>
                ¿Querés conocer sobre <br></br>   los paises del Mundo?
            </div>
            <div className={style.land_question}>
                Hacé click
            </div>
            <Link to='/home'>
            <section className={style.section}>
                <div className={style.earth}></div>
                <div className={style.circle}>
                <span className={style.span1}>P</span>
                <span className={style.span2}>I</span>
                <span className={style.span3}>-</span>
                <span className={style.span4}>C</span>
                <span className={style.span5}>o</span>
                <span className={style.span6}>u</span>
                <span className={style.span7}>n</span>
                <span className={style.span8}>t</span>
                <span className={style.span9}>r</span>
                <span className={style.span10}>i</span>
                <span className={style.span11}>e</span>
                <span className={style.span12}>s</span>
                <span className={style.span13}>-</span>
                <span className={style.span14}>A</span>
                <span className={style.span15}>p</span>
                <span className={style.span16}>p</span>
                <span className={style.span17}>-</span>
                <span className={style.span18}>H</span>
                <span className={style.span19}>e</span>
                <span className={style.span20}>n</span>
                <span className={style.span21}>r</span>
                <span className={style.span22}>y</span>
                <span className={style.span23}>-</span>
                </div>
            </section>
            </Link>
        </div>
    )
};