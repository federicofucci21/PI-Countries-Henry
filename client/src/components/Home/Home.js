import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, filterCountriesByContinent, filterOrderAlf, filterCountriesByActivity, filterPopulation, getActivities} from '../../actions';
import { Link } from "react-router-dom";
import CountryCards from '../CountryCards/CountryCards'
import style from  './/HomeStyle.module.css'
import Pages from '../Pages/Pages';
import SearchBar from '../SearchBar/SearchBar';


export default function Home(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries()
        )
    }, [dispatch, getCountries]
    );
    useEffect(()=>{
        dispatch( 
        getActivities())
    }, [dispatch, getActivities]
    );

    const selectActivities = useSelector((state)=>state.allActivities);
        console.log('selectActivities', selectActivities)

    const allCountries = useSelector((state)=>state.countries);
    // console.log(allCountries);


    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9);
    const indexOfLastCountries= currentPage * countriesPerPage;
    const indexOfFisrtCountries= indexOfLastCountries - countriesPerPage;
    const currentCountries = allCountries.length?allCountries.slice(indexOfFisrtCountries, indexOfLastCountries):allCountries
    const [order, setOrder] = useState('')
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

        // console.log('currentPage', currentPage)
    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    };

    function handleFilterByContinent(e){
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value))
    };

    function handleFilterByActivity(e){
        e.preventDefault();
        dispatch(filterCountriesByActivity(e.target.value))
    };

    function handleOrderAlf(e){
        e.preventDefault();
        dispatch(filterOrderAlf(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`)
    };

    function handleOrderPob(e){
        e.preventDefault();
        dispatch(filterPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`)
    };


    return(
        <div className={style.home}>

        <header className={style.navbar}>
            <SearchBar className={style.buttonNav_Search}/>
            <Link to='/activity'><button className={style.buttonNav_Act}>Activities</button></Link>
            <button className={style.buttonNav_Refresh} onClick={e=>{handleClick(e)}}>Refresh</button>
        </header>

        <section className={style.titleSec}>
            <div className={style.title}>Paises del Mundo</div>
        </section>

        <section className={style.filterContinent}>
            <div className={style.divContinent}>
            <button className={style.btnCont} value='all' onClick={e=>{handleFilterByContinent(e)}}>All Countries</button>
            <button className={style.btnCont} value='Africa' onClick={e=>{handleFilterByContinent(e)}}>Africa</button>
            <button className={style.btnCont} value='Asia' onClick={e=>{handleFilterByContinent(e)}}>Asia</button>
            <button className={style.btnCont} value='Americas' onClick={e=>{handleFilterByContinent(e)}}>America</button>
            <button className={style.btnCont} value='Europe' onClick={e=>{handleFilterByContinent(e)}}>Europa</button>
            <button className={style.btnCont} value='Oceania' onClick={e=>{handleFilterByContinent(e)}}>Oceania</button>
            </div>
        </section>

        <section className={style.filter}>
            <div className={style.divSelect}>
            <label>Orden Alfabetico</label>
            <select className={style.select} placeholder='Order Alf' onChange={e=>{handleOrderAlf(e)}}>
                <option>--Order--</option>
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
            </select>
            </div>
            <div className={style.divSelect}>
            <label>Orden por Poblacion</label>
            <select className={style.select} placeholder='Order Popul' onChange={e=>{handleOrderPob(e)}}>
                <option>--Order--</option>
                <option value='min'>Min</option>
                <option value='max'>Max</option>
            </select>
            </div>
            <div className={style.divSelect}>
            <label>Orden por Actividad</label>
            <select className={style.select} placeholder='Activities' onChange={(e)=>{handleFilterByActivity(e)}}>
                <option value='all'>Activities</option>
                <option value='all'>All</option>
                    {
                        selectActivities.map(e=>(
                            <option value={e.name}>{e.name}</option>
                        ))
                    }
                </select>
            </div>
        </section> 

<main className={style.main} >
    <section className={style.homeCard}>
        <CountryCards currentCountries={currentCountries}/>
    </section>
</main>


<footer className={style.footer}>
<div>
    <Pages
    countriesPerPage={countriesPerPage}
    allCountries={allCountries.length}
    currentPage = {currentPage}
    paginado={paginado}
    />
</div>
</footer>

</div>
    )

};




