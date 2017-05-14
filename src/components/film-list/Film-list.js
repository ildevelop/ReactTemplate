/**
 * Created by Ilya Radu on 14/05/2017.
 */

import React, { Component } from 'react';
import '../film-list/FilmList.scss'
class FilmList extends Component {
    constructor(){
        super();
        this.state = {
            names : [],
            name: 'ilya'
        }

    }

    render(){
        const seeList = this.props.names.map((name, key)=> <li className="mylist" key={key}> {name}</li>);
        return(
            <div>
                <h1>Film-list</h1>

                <ul>
                    {this.state.name}
                    {seeList}
                </ul>
            </div>
        )
    }
}
export default FilmList