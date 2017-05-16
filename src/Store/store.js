/**
 * Created by Ilya Radu on 16/05/2017.
 */
import {createStore } from 'redux';
import { SET_NAME} from './constant'

const initState = {
    id: 0,
    names : ['Titanic', 'Fast Furious','X-men'],
    selectedFilm: null
}


const reducerF = ( state = initState , action) => {
    switch (action.type) {
        case SET_NAME:
            state = {...state, selectedFilm: action.payload};
            break;


    }
    return state;

}

const store = createStore(reducerF);
export default store
