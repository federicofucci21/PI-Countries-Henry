import React from 'react';
import '../Css Modules/CountryDetailsStyle.css'


export default function CountryDetails({flag, id, name, region, capital, subregion, area, population} ){
    return (
        <div>
            <img src={flag} alt='Flag not Found' />
            <h3>{name}</h3>
            <h5>{id}</h5>
            <h5>{region}</h5>
            <h5>{capital}</h5>
            <h5>{subregion}</h5>
            <h5>{area}</h5>
            <h5>{population}</h5>
        </div>
    )
}