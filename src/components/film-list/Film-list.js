/**
 * Created by Ilya Radu on 14/05/2017.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SET_NAME} from '../../Store/constant'
import '../film-list/FilmList.scss'
class FilmList extends Component {
    constructor(){
        super();
        this.state = {
            filmsName : [],
        }

    }

    render(){
        const {dispatch} = this.props;
        return(
            <div>
                <h1>Film-list</h1>
                <ul>
                    {this.props.filmsName.map((name, key)=> <li onClick={() => {dispatch({type: SET_NAME, payload: name}) }   } className="mylist" key={key} > {name}</li>)}
                </ul>
            </div>
        )
    }
}


export default connect()(FilmList)