import React from 'react';
import style from '../Css Modules/PagesStyle.css'

export default function Pages({countriesPerPage, allCountries, paginado}){
    const pagesNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pagesNumbers.push(i)}
        return(
            <nav>
                <ul className={style.pages}>
                    {pagesNumbers &&
                    pagesNumbers.map(e =>( 
                        <span className='number' key={e}>
                        <button className='button' onClick={()=>paginado(e)}>{e}</button>
                        </span>
                    ))}
                </ul>
            </nav>
        )
        
    }

