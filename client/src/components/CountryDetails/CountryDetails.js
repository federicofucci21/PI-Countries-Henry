import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountryDetail, cleanDeteails } from '../../actions';
import { Link } from 'react-router-dom';
import style  from './CountryDetailsStyle.module.css'

export default function CountryDetails(props){

    const id = props.match.params.id;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountryDetail(id)); 
    return ()=>{
        dispatch(cleanDeteails(dispatch))
    }
}, [dispatch]
    );

    const countriesDetail = useSelector((state)=>state.countryDetails);
    // console.log(countriesDetail);

    
return(
    <div className={style.main}>
    <header className={style.header}>
    <Link to= "/home">
        <button className={style.btnHeader}>Volver</button>
    </Link>
    </header>
    <section>
        <div className={style.divCard}>

        <img className={style.img} src={countriesDetail?.flag} alt="Flag not found"/>
        <section>
        <h1>{countriesDetail?.name}</h1>
        <h5>CODE: {countriesDetail?.id}</h5>  
        <h5>Continent: {countriesDetail?.region}</h5>
        <h5>Subregion: {countriesDetail?.subregion}</h5>
        <h5>Sup: {countriesDetail?.area} Km2</h5>
        <h5>Capital City: {countriesDetail?.capital}</h5>
        <h5>Population: {countriesDetail?.population} hab.</h5>

        </section>

        {/* <h5>ACTIVIDADES</h5> */}
        
        {countriesDetail?.activities?.length ?
    countriesDetail?.activities.map(a=>{
        return (
        <section className={style.actSection}>
            <div key={a.id} >
            <h2>{a.name.toUpperCase()}</h2>
            <h5>Difficulty: {a.difficulty}</h5>
            <h5>Duration: {a.duration} hours</h5>
            <h5>Season: {a.season}</h5>
            </div>   
        </section>)
    } ):
        <h5> NO HAY ACTIVIDADES PARA ESTE PAIS</h5>
    }
    </div>

    </section>

</div>
)
    // return (
    //     <div>
    //             <img src={countryDetails.flag} alt='Flag not Found'  />
    //             <h3>{countryDetails.name}</h3>

    //             <h5>{countryDetails.region}</h5>
    //             <h5>{countryDetails.capital}</h5>
    //             <h5>{countryDetails.subregion}</h5>
    //             <h5>{countryDetails.area}</h5>
    //             <h5>{countryDetails.population}</h5>
    //     </div>
    // )
}