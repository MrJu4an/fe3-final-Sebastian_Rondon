import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducers/reducer"
import axios from 'axios'

const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem('favs')) || []
const lsTheme = localStorage.getItem('theme') === 'true' ? true : false

const initialState = {
  dentists: [],
  favs: lsFavs,
  theme: lsTheme
}

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({type: "GET_DENTISTS", payload: res.data})
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  useEffect(() => {
    localStorage.setItem('theme', state.theme)
  }, [state.theme])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal)
