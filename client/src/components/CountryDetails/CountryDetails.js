import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail, cleanDeteails } from "../../actions/countryActions";
import { Link } from "react-router-dom";
import style from "./CountryDetailsStyle.module.css";

export default function CountryDetails(props) {
  const id = props.match.params.id;

  const dispatch = useDispatch();
  //useState ATENCION
  useEffect(() => {
    dispatch(getCountryDetail(id));
    return () => {
      dispatch(cleanDeteails(dispatch));
    };
  }, [dispatch, id]);

  const countriesDetail = useSelector((state) => state.countryDetails);
  // console.log(countriesDetail);

  return (
    <div className={style.main}>
      <header className={style.header}>
        <Link to="/home">
          <button className={style.btnHeader}>Volver</button>
        </Link>
      </header>
      <section className={style.section}>
        <div className={style.divCard}>
          <img
            className={style.img}
            src={countriesDetail?.flag}
            alt="Flag not found"
          />
          <section>
            <h1>{countriesDetail?.name}</h1>
            <h5>CODE: {countriesDetail?.id}</h5>
            <h5>Continent: {countriesDetail?.region}</h5>
            <h5>Subregion: {countriesDetail?.subregion}</h5>
            <h5>Sup: {countriesDetail?.area} Km2</h5>
            <h5>Capital City: {countriesDetail?.capital}</h5>
            <h5>Population: {countriesDetail?.population} hab.</h5>
          </section>

          {countriesDetail?.activities?.length ? (
            countriesDetail?.activities.map((a) => {
              return (
                <section className={style.actSection}>
                  <div key={a.id}>
                    <h2>{a.name.toUpperCase()}</h2>
                    <h5>Difficulty: {a.difficulty}</h5>
                    <h5>Duration: {a.duration} hours</h5>
                    <h5>Season: {a.season}</h5>
                  </div>
                </section>
              );
            })
          ) : (
            <h5> NO HAY ACTIVIDADES PARA ESTE PAIS</h5>
          )}
        </div>
      </section>
    </div>
  );
}






// import React, { Component } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector, connect } from "react-redux";
// import { getCountryDetail, cleanDeteails } from "../../actions/countryActions";
// import { Link } from "react-router-dom";
// import style from "./CountryDetailsStyle.module.css";

// export class CountryDetails extends Component() {

//   constructor(props){
//     super(props);
//     this.state.CountryDetails = undefined
// }
// componentDidMount(){
//     this.props.getCountryDetail(this.props.match.params.id);
// };

// componentWillUnmount(){
//     this.props.cleanDeteails();
// }


// render(){
//   return (
//     <div className={style.main}>
//       <header className={style.header}>
//         <Link to="/home">
//           <button className={style.btnHeader}>Volver</button>
//         </Link>
//       </header>
//       <section className={style.section}>
//         <div className={style.divCard}>
//           <img
//             className={style.img}
//             src={this.props.countriesDetail?.flag}
//             alt="Flag not found"
//           />
//           <section>
//             <h1>{this.props.countriesDetail?.name}</h1>
//             <h5>CODE: {this.props.countriesDetail?.id}</h5>
//             <h5>Continent: {this.props.countriesDetail?.region}</h5>
//             <h5>Subregion: {this.props.countriesDetail?.subregion}</h5>
//             <h5>Sup: {this.props.countriesDetail?.area} Km2</h5>
//             <h5>Capital City: {this.props.countriesDetail?.capital}</h5>
//             <h5>Population: {this.props.countriesDetail?.population} hab.</h5>
//           </section>

//           {this.props.countriesDetail?.activities?.length ? (
//             this.props.countriesDetail?.activities.map((a) => {
//               return (
//                 <section className={style.actSection}>
//                   <div key={a.id}>
//                     <h2>{a.name.toUpperCase()}</h2>
//                     <h5>Difficulty: {a.difficulty}</h5>
//                     <h5>Duration: {a.duration} hours</h5>
//                     <h5>Season: {a.season}</h5>
//                   </div>
//                 </section>
//               );
//             })
//           ) : (
//             <h5> NO HAY ACTIVIDADES PARA ESTE PAIS</h5>
//           )}
//         </div>
//       </section>
//     </div>
//   );}
// }

// export const mapStateToProps = (state) => {
//     return {
//         countriesDetail : state.countriesDetail
//     }
//   };
  
//   export const mapDispatchToProps = (dispatch) => {
//     return {
//         getCountryDetail : () => dispatch(getCountryDetail()),
//       cleanDeteails : () => dispatch(cleanDeteails())

//     }
//   };
  
//   export default connect(mapStateToProps,mapDispatchToProps)(CountryDetails)