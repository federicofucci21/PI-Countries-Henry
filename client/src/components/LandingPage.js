import React from 'react';
import { Link } from "react-router-dom";
import style from '../Css Modules/LandingPageStyle.module.css'

export default function landingPage (){

    return( 
        <div className={style.land}>
            <div className={style.title}>
            PI Countries App - Henry
            </div>
            <div>
            <Link className={style.welcome} to='/home'>
            Welcome
            </Link>
            </div>
        </div>
    )
};