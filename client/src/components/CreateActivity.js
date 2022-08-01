import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../actions";
import { Link, useHistory } from "react-router-dom";
import style from '../Css Modules/CreateActivityStyle.module.css'


export default function CreateActivity (props){

    const dispatch = useDispatch();
    const allCountries = useSelector((state)=> state.allCountries)
    // console.log(allCountries)
    const history = useHistory();

    const [ input, setInput ] = useState({
        name: '',
        difficulty: 0,
        duration: 0,
        season: '', 
        countries: []
    });
    // console.log(input)
    useEffect(()=>{
        dispatch(getCountries())
    }, []
    );
    

    function handleInputChange(e){
        e.preventDefault(e);
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createActivity(input));
        console.log(input);
        setInput({
            name: "",
            difficulty: 0,
            duration: 0,
            season: '',
        });
        console.log('Activity Created');
        history.push('/home')
    };

    function handleSelect(e){
        setInput({
            ... input,
            countries:[...input.countries, e.target.value]
        })
    }


    return (
        <div className={style.create}>
        <header>
            <div className={style.header}>
                <Link to='/home'><button className={style.btnHeader}>Volver</button></Link>
            </div>
        </header>

        <main>
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}> 
            <div>
                <label>Name: </label>
                <input type='text' 
                name='name' 
                onChange= {handleInputChange} 
                value={input.name}/>
            </div>

            <div>
            <label>Difficulty: </label>  
            <select placeholder='Difficulty' 
                    name='difficulty'
                    // value={input.season}
                    onChange={handleInputChange}>
                <option value='1'>1-(Muy Facil)</option>
                <option value='2'>2-(Facil)</option>
                <option value='3'>3-(Medio)</option>
                <option value='4'>4-(Dificil)</option>
                <option value='5'>5-(Muy Dificil)</option>
            </select>
            </div>

            <div>
                <label>Duration: </label>
                <input 
                name="duration" 
                onChange={handleInputChange} 
                value={input.duration}></input>
            </div>
            <div>
            <label>Season: </label>  
            <select placeholder='Season' 
                    name='season'
                    // value={input.season}
                    onChange={handleInputChange}>
                <option value='Autumn'>Autumn</option>
                <option value='Winter'>Winter</option>
                <option value='Spring'>Spring</option>
                <option value='Summer'>Summer</option>
            </select>
            </div>

            <div>
                <select onChange={handleSelect}>
                    {
                        allCountries.map(e=>(
                            <option value={e.name}>{e.name}</option>
                        ))
                    }
                </select>
                <ul><li>{input.countries.map(e=>e+', ')}</li></ul>
            </div>

            <button type='submit'>Create Activity</button>

        </form>
        </div>
        </main>
        </div>
    );
}







// <div>
// <label>Difficulty: </label>
// <input type="range" 
// name='difficulty' 
// min='1' 
// max='5' 
// step='1' 
// onChange={handleInputChange} 
// value={input.difficulty}
// id='range'
// />
// <input type="text" id="textInput" value={input.difficulty}/>
// {/* <div>{input.difficulty}</div> */}
// </div>