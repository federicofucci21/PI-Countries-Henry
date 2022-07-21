import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../actions';
import { Link } from "react-router-dom";
import CountryCard from './CountryCard';
import '../Css Modules/HomeStyle.css'

export default function Home(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())}, [dispatch]
    );

    const allCountries = useSelector((state)=>state.countries);
    // console.log(allCountries);

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    };


    return(
        <div class="home">
            <Link to='/activities'>Crea tu Actividad</Link>
            <h1>Hello Countries</h1>
            <button onClick={e=>{handleClick(e)}}>Refresh</button>

        {
            allCountries?.map((e)=>{
            return (
                <CountryCard 
                id={e.id}
                flag={e.flag} 
                name={e.name} 
                region={e.region}/>
        )})
        }
        </div>
    )

};




            /* <div>
                <button>All Countries</button>
                <button>Africa</button>
                <button>Asia</button>
                <button>America</button>
                <button>Europa</button>
                <button>Oceania</button>
            </div>
            <div>
                <select>
                    <option>Asce</option>
                    <option>Desce</option>
                </select>
            </div>
            <div>
                <select>
                    <option>Activity</option>     
                </select>
            </div> */