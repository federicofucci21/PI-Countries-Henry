import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../actions';
import { Link } from "react-router-dom";

export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state)=>state.countries);

    useEffect(()=>{
        dispatch(getCountries(), [])
    })

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    };


    return(
        <div>
            <Link to='/activities'>Crea tu Actividad</Link>
            <h1>Maria Julia</h1>
            <button onClick={e=>{handleClick(e)}}>Refresh</button>
            <div>
                <select>
                    <option>Continent</option>
                    <option>Activity</option>
                    <option>Asce</option>
                    <option>Desce</option>
                </select>
            </div>
        </div>
    )
}