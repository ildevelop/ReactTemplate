import {SET_NAME, SET_EMAIL} from './constant'
export const addName =(selectedFilm)=> ({type: SET_NAME, payload: selectedFilm});
export const addEmail =(email)=> ({type: SET_EMAIL, payload: email});