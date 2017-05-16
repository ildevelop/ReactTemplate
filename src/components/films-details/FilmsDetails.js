/**
 * Created by Ilya Radu on 14/05/2017.
 */


import React, { Component } from 'react';

class FilmsDetails extends Component {
    render(){
        return(
            <div>{this.props.selectedFilm}</div>
        )
    }
}
export default FilmsDetails