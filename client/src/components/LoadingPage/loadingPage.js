import React from 'react';
import style from './loadingPageStyle.module.css';

function LoadingPage() {
    return (
        <div className={style.div}>  
            <div className={style.spin}></div>
        </div>
        )
}

export default LoadingPage