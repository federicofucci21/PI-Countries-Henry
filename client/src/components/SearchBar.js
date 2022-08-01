import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryName } from '../actions';
import style from '../Css Modules/SearchbarStyle.module.css'



export default function SearchBar (){

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);

    };

    function handleSubmit(e){

        // console.log(name)
        e.preventDefault();
        dispatch(getCountryName(name));
        setName('')
    }


    return (
        <form className={style.form}>
            <input
            className={style.input}
            type='text'
            placeholder='Find Country...'
            onChange={(e)=> handleInputChange(e)}
            />

            <button
            className={style.btn}
            type='submit' 
            onClick={(e)=> handleSubmit(e)}
            >Buscar</button>

        </form>
    )
}