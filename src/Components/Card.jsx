import React from "react";
import DentistLogo from '/images/doctor.jpg'
import { useContextGlobal } from "./utils/global.context";
import { Link } from 'react-router-dom'
import { routes } from "./utils/routes";


const Card = ({ dentist }) => {

  const { state, dispatch } = useContextGlobal()

  const isFav = state.favs.find((fav) => fav.id == dentist.id)

  const addFav = () => {
    dispatch( {type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist } )
  }

  return (
    <div className={state.theme === true ? "card dark" : "card"}>
        <Link to={`${routes.details}/${dentist.id}`}>
          <img src={DentistLogo} alt="Dentis-image"></img>
          <h4>{dentist.name}</h4>
          <h5>{dentist.username}</h5>
        </Link>
        <button onClick={addFav} className="favButton">{ isFav ? "⛔" : "⭐"}</button>
    </div>
  );
};

export default Card;
