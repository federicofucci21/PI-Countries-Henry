import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries,  getActivities} from '../../actions';
import CountryCards from '../CountryCards/CountryCards'
import style from  './/HomeStyle.module.css'
import Pages from '../Pages/Pages';
import LoadingPage from '../LoadingPage/loadingPage';
import Filters from '../Filters/filters'


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



    return (
      <div>{
        !currentCountries.length?<LoadingPage />:
      <div className={style.home}>
        <Filters
          setCurrentPage={setCurrentPage}
          setOrder={setOrder}
          selectActivities={selectActivities}
        />

        <main className={style.main}>
          <section className={style.homeCard}>
              <CountryCards currentCountries={currentCountries} />
          </section>
        </main>

        <footer className={style.footer}>
          <div>
            <Pages
              countriesPerPage={countriesPerPage}
              allCountries={allCountries.length}
              currentPage={currentPage}
              paginado={paginado}
            />
          </div>
        </footer>
      </div>}
      </div>
    );

};




