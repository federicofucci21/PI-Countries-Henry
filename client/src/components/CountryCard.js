import React from 'react';
import { Link } from 'react-router-dom'
import '../Css Modules/CountryCardStyle.css'


export default function CountryCard({ id, flag, name, region }){
    return (
        <Link to={`/countries/${id}`} >  
            <div class='card'>
                <img class='imgstyle' src={flag} alt='Flag not Found'  />
                <h3 class='hclass'>{name}</h3>
                <h5 lass='hclass'>{region}</h5>
            </div>
        </Link>
    )
}