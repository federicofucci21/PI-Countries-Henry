import React from 'react';
import style from './PagesStyle.module.css'

export default function Pages({countriesPerPage, allCountries, paginado, currentPage}){

    // const currentPage= currentPage;
    const prevVar = '< Previous'
    const nextVar = 'Next >'

    function handleNext(e){
        let a = Math.ceil(allCountries/countriesPerPage)
        console.log('aaa', a)
        if(e.currentPage< a){       
            e = e.currentPage + 1;
            console.log('ola', e)
            paginado(e)
        }
    };
    function handlePrev(e){
        if(e.currentPage>1){  
            e = e.currentPage - 1;
            console.log('ola', e)
            paginado(e)
        }
    }

    const pagesNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pagesNumbers.push(i)}
        return(
            <div className={style.nav}>
                <div className={style.btnDiv}>
                <button className={style.btnPage} onClick={()=>{handlePrev({currentPage})}}> {prevVar} </button>
                <h5 className={style.current}>{currentPage}</h5>
                <button className={style.btnPage} onClick={()=>{handleNext({currentPage})}}>{nextVar}</button>
                </div>
                <div>
                <ul className={style.pages}>
                    {
                    pagesNumbers &&
                    pagesNumbers.map(e =>( 
                        <span className={style.number} key={e}>
                        <button className={style.button} onClick={()=>paginado(e)}>{e}</button>
                        </span>
                    ))}
                </ul>
                </div>
            </div>
        )
        
    }

