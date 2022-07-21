import React from 'react';
import { Link } from "react-router-dom";

export default function landingPage (){

    return( 
        <div>
            <h1>Countries PI - Henry</h1>
            <Link to='/home'>
                <button>Welcome</button>
            </Link>
        </div>
    )
};