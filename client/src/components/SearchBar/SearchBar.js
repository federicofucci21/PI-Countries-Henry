import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getCountryName } from "../../actions/countryActions";
import style from "./SearchbarStyle.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const searchInput = document.getElementById("searchInput");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    // console.log(name)
    if (name === "") {
      e.preventDefault();
      dispatch(getCountries());
      alert("You must insert a Country Name");
    } else {
      e.preventDefault();
      dispatch(getCountryName(name));
    }
    setName("");
    searchInput.value = "";
  }

  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
      <input
        id="searchInput"
        className={style.input}
        type="text"
        placeholder="Find Country..."
        onChange={(e) => handleInputChange(e)}
      />

      <button
        className={style.btn}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </form>
  );
}
